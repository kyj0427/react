import MyCount from "./MyCount";

function MyMenu() {
  return (
    <div>
      <h5>[ MyCount 컴포넌트 ]</h5>
      <MyCount />

        <h5>[ MyMenu 컴포넌트 ]</h5>
      <MyCount name="사과" />
      <MyCount name="배" />
      <MyCount name="귤" />
    </div>
  );
}

export default MyMenu;
