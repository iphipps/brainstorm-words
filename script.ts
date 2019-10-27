console.log('hello');

interface IWord {
  word: string;
  rating: number;
  top: string;
  left: string;
}

const store: IWord[] = [];

const onSubmit = (e: Event) => {
  e.preventDefault();
  console.log('e is', e);
  const target = e.target as HTMLFormElement;
  const input = target[0] as HTMLInputElement;
  const inputData = new FormData(target);
  const data = {
    word: inputData.get('word') as string,
    rating: 0,
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
  };
  store.push(data);
  console.log(data);
  addToDom(data);
  input.value = '';
  console.log(store);
};

const addToDom = (word: IWord) => {
  const template: HTMLTemplateElement = document.querySelector('template.li');
  const content = template.content;
  const span = content.querySelector('span');
  const li = content.querySelector('li');
  li.id = word.word;
  li.style.left = word.left;
  li.style.top = word.top;
  span.textContent = word.word;
  console.log(content);
  document.querySelector('ul').appendChild(document.importNode(content, true));
};
