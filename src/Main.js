import React, { useState } from "react";
import "./App.css";
import SplitPane, { Pane } from 'react-split-pane';
import Document from "./Document";
import Table from "./Table";
import { Grid } from "@material-ui/core";
import PdfViewer from "./pdfViewer/pdfViewer"

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

function Main() {

  const [receivedUrl, setReceivedUrl] = useState("")

  return (
    <div>
      <SplitPane split="vertical" minSize={200} defaultSize="50%" resizerStyle={styles} >
      <Table setReceivedUrl={setReceivedUrl} />
      <PdfViewer fileUrl={receivedUrl} />   
      </SplitPane>
    </div>
  );
}

export default Main;
