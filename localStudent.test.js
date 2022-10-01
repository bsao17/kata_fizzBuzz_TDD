import localStudent from "./function/fizzBuzzClassroom"

describe("Verifier que le kata fizzBuzz fonctionne", () => {
  it("vérifier la fonction localStudent et le nombre de fizzBuzz dans une classe de 10 élèves", () => {
    expect(localStudent(10)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz");
  });
});
