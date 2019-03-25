import { fetchColors } from "../utils/api";

describe("#fetchColors() using async/await", () => {
  it("should load a random color object", async () => {
    const color = await fetchColors();
    expect(color).toBeDefined();
    expect(color.new_color).toEqual(expect.stringMatching(/(^$|[a-f0-9]{6})/g));
  });
});
