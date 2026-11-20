import { test, expect } from "@playwright/test";

test("redirects to Spanish and keeps the section when changing languages", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  await expect(page).toHaveURL(/\/es$/);
  await page.getByRole("navigation").getByRole("link", { name: "Conocimientos" }).click();
  await expect(page).toHaveURL(/\/es#skills$/);
  await page.getByRole("link", { name: "Inglés", exact: true }).click();
  await expect(page).toHaveURL(/\/en#skills$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { name: "Skills and tools" })).toBeVisible();
  await expect(page.getByRole("link", { name: "English", exact: true })).toHaveAttribute("aria-current", "page");
  await page.getByRole("link", { name: "Spanish", exact: true }).click();
  await expect(page).toHaveURL(/\/es#skills$/);
});

test("mobile menu supports Escape, section focus, and leaving with Tab", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/es");
  const navigation = page.getByRole("navigation");
  await expect(navigation).toBeHidden();
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await expect(navigation).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(navigation.getByRole("link", { name: "Proyectos", exact: true })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menú" })).toBeFocused();
  await expect(navigation).toBeHidden();
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await navigation.getByRole("link", { name: "Contacto", exact: true }).click();
  await expect(page.locator("#contact")).toBeFocused();
  await expect(navigation).toBeHidden();
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await navigation.getByRole("link", { name: "Contacto", exact: true }).focus();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(navigation).toBeHidden();
});

test("skip link moves keyboard focus to main content", async ({ page }) => {
  await page.goto("/en");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
});

for (const locale of ["es", "en"]) {
  test(`${locale} has no horizontal overflow at mobile, tablet, desktop, and enlarged-text widths`, async ({ page }) => {
    await page.goto(`/${locale}`);
    for (const width of [320, 375, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    await page.setViewportSize({ width: 375, height: 812 });
    await page.addStyleTag({ content: "html { font-size: 200%; }" });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('a[href="mailto:ignacio0512942@gmail.com"]')).toBeVisible();
    await expect(page.locator('a[href="tel:+56991845633"]')).toBeVisible();
  });
}

test("unknown languages return 404", async ({ request }) => {
  const response = await request.get("/fr");
  expect(response.status()).toBe(404);
});
