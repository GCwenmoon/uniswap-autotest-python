from playwright.sync_api import Page, expect
from typing import Self
import re


class SwapPage:
    def __init__(self, page: Page):
        self.page = page
        self.swap_url = f"{base_url}swap" # type: ignore

    # Navigate to Swap page
    def navigate(self) -> Self:
        self.page.goto(self.swap_url)
        self.page.wait_for_load_state("networkidle")
        return self

    def connect_metamask(self) -> Self:
        # self.page.get_by_role("button", name="Connect").click()
        # self.page.get_by_text("MetaMask").click()
        self.page.get_by_test_id("navbar-connect-wallet").click()
        self.page.get_by_test_id("account-drawer").get_by_text("MetaMask").click()

        with self.page.expect_popup() as popup_info:
            pass
        metamask_page = popup_info.value
        metamask_page.get_by_role("button", name="Next").click()
        metamask_page.get_by_role("button", name="Connect").click()
        metamask_page.get_by_role("button", name="Confirm").click()
        print("✅ MetaMask connected")
        return self

    def select_tokens_and_amount(self, from_token: str, to_token: str, amount: str) -> Self:

        self.page.locator("button[data-testid='token-button-from']").click()
        self.page.get_by_placeholder("Search name or address").fill(from_token)
        self.page.locator(f"text={from_token.upper()}").first.click()

        self.page.locator("button[data-testid='token-button-to']").click()
        self.page.get_by_placeholder("Search name or address").fill(to_token)
        self.page.locator(f"text={to_token.upper()}").first.click()

        self.page.get_by_test_id("amount-input").fill(amount)
        self.page.wait_for_timeout(3000)
        return self

    def confirm_swap_and_sign(self) -> Self:
        self.page.get_by_role("button", name="Swap").click()
        expect(self.page.locator("text=Review swap")).to_be_visible()

        self.page.get_by_role("button", name="Confirm swap").click()


        with self.page.expect_popup() as popup_info:
            pass
        metamask_page = popup_info.value
        metamask_page.get_by_role("button", name="Confirm").click()
        print("✅ MetaMask singature completed")
        return self