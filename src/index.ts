const test = async () => {
  const res = await new Promise((resolve) => {
    setTimeout(resolve, 1000, "hello");
  });
  const abc = "12345";
  console.log(res, abc);
};
export default test;
