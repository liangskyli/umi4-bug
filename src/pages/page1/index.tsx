import { history } from "@umijs/max";
import {WaterMark} from "antd-mobile";

export default function Page1() {
const nextPage = () => {
    //history.push('/page2');
    window.location.href = '/sub-demo/page2';
};
  return (
    <div>
        Page1
        <button onClick={nextPage}>next page</button>
        <WaterMark
           content="content1"
        />
    </div>
  );
}
