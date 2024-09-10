const Button = ({ text, color, children }) => {
    // 이벤트 객체
    // 이벤트 객체를 매개변수 e라고 하면 SyntheticBaseEvent 출력
    // 합성 이벤트 
    //ㄴ> 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태

    // 브라우저는 많은데 회사도 다름! = 동작이 조금씩 다르다
    // 브라우저마다 Event 객체가 서로 다르다
    // 이런 문제를 Cross Browing Issue -> 이를 합성 이벤트가 해결
    const onClickButton = (e) => {
      console.log(e);
      console.log(text);
    };
  
    return (
      <button
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{ color: color }}
      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    );
  };
  
  Button.defaultProps = {
    color: "black",
  };
  
  export default Button;