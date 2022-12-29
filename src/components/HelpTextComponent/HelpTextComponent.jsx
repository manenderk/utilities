import { Collapse } from "@mantine/core";
import { useState } from "react";

const HelpTextComponent = ({
  isOpened,
  children
}) => {

  const [isSectionOpenend, setIsSectionOpenend] = useState(isOpened);

  return (
    <div>
      <span className="link" onClick={() => setIsSectionOpenend(!isSectionOpenend)}>
        <i className={isSectionOpenend ? 'fa fa-caret-down' : 'fa fa-caret-right'}></i> Help
      </span>
      <Collapse
        in={isSectionOpenend}
      >
        {children}
      </Collapse>
    </div>
    
  )
}

HelpTextComponent.defaultProps = {
  isOpened: false
}

export default HelpTextComponent