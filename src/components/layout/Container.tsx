import "./Container.css"

interface ChildrenProp {
  children: React.ReactNode;
}


function Container(props: ChildrenProp ): JSX.Element {
  return <main className="container">{props.children}</main>;
}

export default Container;