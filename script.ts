console.log('am i running yes');

const onSubmit = (e: Event) => {
  e.preventDefault();
  console.log('e is', e);
  const inputData = new FormData(e.target as HTMLFormElement);
  console.log(e.target);
  console.log(inputData);
};
