import fizzBuzz from "./function/fizzBuzz"

describe("effectuer le kata fizzBuzz du coding dojo ", () => {
  /*it(" verifier qu'il y a dans une classe de 5 élèves, 2 fizz et 1 buzz", () => {
    const result = { fizz: 2, buzz: 1 };
    expect(fizzBuzz(5)).toEqual(expect.objectContaining(result));
  });

  it(" verifier qu'il y a dans une classe de 10 élèves, 4 fizz et 3 buzz", () => {
    const result = { fizz: 4, buzz: 3 };
    expect(fizzBuzz(10)).toEqual(expect.objectContaining(result));
  });*/
  it("test de la function fizzBuzz avec un chiffre qui n'est ni un multiple de 5 ni de 3 et renvoi juste le chiffre", () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("test de la function fizzBuzz avec un multiple de 5 qui renvoi buzz", () => {
    expect(fizzBuzz(5)).toEqual("buzz");
  });
  it("test de la function fizzBuzz avec un multiple de 3 qui renvoi fizz", () => {
    expect(fizzBuzz(3)).toEqual("fizz");
  });
  it("test de la function fizzBuzz avec un multiple de 3 et de 5 qui renvoi fizzBuzz", () => {
    expect(fizzBuzz(15)).toEqual("fizz");
  });
});
