# conftest.py
import pytest
from playwright.sync_api import Playwright, Browser, BrowserContext, Page
import os
from datetime import datetime


METAMASK_PATH = os.path.join(os.getcwd(), "extensions", "metamask")

TEST_SEED_PHRASE = "test test test test test test test test test test test junk"
TEST_PASSWORD = "TestPassword123!"

@pytest.fixture(scope="session")
def browser(playwright: Playwright):
    browser_instance = playwright.chromium.launch(
        headless=False,
        slow_mo=500,
        args=[
            f"--disable-extensions-except={METAMASK_PATH}",
            f"--load-extension={METAMASK_PATH}",
            "--no-sandbox",
            "--disable-setuid-sandbox",
        ],
    )
    yield browser_instance
    browser_instance.close()


@pytest.fixture(scope="session")
def import_metamask_wallet(browser: Browser):
    print("🔧 Importing Metamask")

    context = browser.new_context(viewport={"width": 1280, "height": 900})
    page = context.new_page()

    try:
        page.goto("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html", timeout=10000)
    except Exception:
        # in case ID is incorrect
        page.goto("chrome-extension://", timeout=5000)
        # click metmask icon / onboarding directly

    # === Import Wallet ===
    try:
        # Check whether import is needed
        if page.get_by_text("Import wallet", timeout=5000).is_visible():
            print("📥 Import is required, start importing...")
            
            page.get_by_text("Import wallet").click()
            page.get_by_text("I agree").click() if page.get_by_text("I agree").is_visible() else None
            
            # input seed phrase
            page.get_by_role("textbox").fill(TEST_SEED_PHRASE)
            page.get_by_role("button", name="Continue").click()
            
            # Setup password
            page.get_by_placeholder("New password").fill(TEST_PASSWORD)
            page.get_by_placeholder("Confirm password").fill(TEST_PASSWORD)
            page.get_by_role("checkbox").check()
            page.get_by_role("button", name="Import").click()
            
            print("✅ MetaMask Imported!")
        
        elif page.get_by_text("Unlock", timeout=3000).is_visible():
            print("🔓 MetaMask imported, entering password...")
            page.get_by_placeholder("Password").fill(TEST_PASSWORD)
            page.get_by_role("button", name="Unlock").click()
        
        else:
            print("✅ MetaMask logged in")


    except Exception as e:
        print(f"⚠️ MetaMask import error: {e}")

    context.close()

    yield


@pytest.fixture(scope="function")
def context(browser: Browser):
    context = browser.new_context(
    )

    # === Enable Trace ===
    trace_name = f"trace_{datetime.now().strftime("%Y%m%d_%H%M%S")}"
    context.tracing.start(
        name=trace_name,
        screenshots=True,
        snapshots=True,
        sources=True, 
    )

    yield context

    # === Auto-save Trace after test run ===
    trace_path = f"traces/{trace_name}.zip"
    context.tracing.stop(path=trace_path)
    print(f"✅ Playwright Trace saved to:{trace_path}")
    context.close()


@pytest.fixture(scope="function")
def page(context: BrowserContext):
    page = context.new_page()
    yield page