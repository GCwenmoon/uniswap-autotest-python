# conftest.py
import pytest
from playwright.sync_api import Playwright, Browser, BrowserContext, Page
import os
from datetime import datetime

# ====================== config ======================
METAMASK_PATH = os.path.join(os.getcwd(), "extensions", "metamask")

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
    print(f"✅ Playwright Trace saved to：{trace_path}")
    context.close()


@pytest.fixture(scope="function")
def page(context: BrowserContext):
    page = context.new_page()
    yield page