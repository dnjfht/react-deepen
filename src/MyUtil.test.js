import { getTriangleArea } from "./MyUtil";

describe("getTriangleArea", () => {
  beforeEach(() => {
    console.log(new Date().toLocaleString());
  });

  test("정상 패턴", () => {
    expect(getTriangleArea(10, 2)).toBe(10);
  });

  test("가로가 50이고 세로가 3이면 삼각형의 넓이는 70이 아니다", () => {
    expect(getTriangleArea(50, 3)).not.toBe(70);
  });

  test("가로가 200이고 세로가 400이면 삼각형의 넓이는 20000이다", () => {
    expect(getTriangleArea(200, 400)).toBe(20000);
  });
});
