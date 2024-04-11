export async function fakeTimeout(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
