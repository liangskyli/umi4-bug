import { history } from "umi";

export default function Page1() {
const nextPage = () => {
    history.push('/page2');
};
  return (
    <div>
        Page1
        <button onClick={nextPage}>next page</button>
    </div>
  );
}
