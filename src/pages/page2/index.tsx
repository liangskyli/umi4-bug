import {WaterMark} from "antd-mobile";
import {history} from "@@/core/history";

export default function Page2() {
    const nextPage = () => {
        //history.push('/page1');
        window.location.href = '/sub-demo/page1';
    };
  return (
    <div>
        Page2
        <button onClick={nextPage}>preview page</button>
        <WaterMark
            content="content2"
        />
    </div>
  );
}
