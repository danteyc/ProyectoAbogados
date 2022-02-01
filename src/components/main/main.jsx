import "./main.scss"

export function Main(props) {
    const {
      children
    } = props;
  
    return <main className="main">{children}</main>;
  }
  