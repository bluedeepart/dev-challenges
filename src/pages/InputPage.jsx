import React from 'react'
import Input from '../components/Input'
import PageHeading from '../components/PageHeading'
import { MdCall, MdLock } from "react-icons/md";

const InputPage = () => {
  return (
    <>
        <PageHeading>Inputs</PageHeading>

        
      {/* <h3>Varient</h3> */}
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input /&gt;</code>
          </p>
          <Input />
        </div>
      </div>

      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input error /&gt;</code>
          </p>
          <Input error />
        </div>
      </div>

      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input disabled /&gt;</code>
          </p>
          <Input disabled />
        </div>
      </div>

      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input helperText="Some interesting text" /&gt;</code>
          </p>
          <Input helperText="Some interesting text" />
        </div>
        <div className="box">
          <p>
            <code>&lt;Input helperText="Some interesting text" error /&gt;</code>
          </p>
          <Input helperText="Some interesting text" error />
        </div>
      </div>

      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input startIcon /&gt;</code>
          </p>
          <Input startIcon={<MdCall />} />
        </div>
        <div className="box">
          <p>
            <code>&lt;Input endIcon /&gt;</code>
          </p>
          <Input endIcon={<MdLock />} />
        </div>
      </div>

      
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input value="Text" /&gt;</code>
          </p>
          <Input value="Text" />
        </div>
      </div>
      

      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input size="sm" /&gt;</code>
          </p>
          <Input size="sm" />
        </div>
        <div className="box">
          <p>
            <code>&lt;Input size="md" /&gt;</code>
          </p>
          <Input size="md" />
        </div>
      </div>

      
      <div className="btn-wrapper">
        <div className="box" style={{flexBasis: '100%'}}>
          <p>
            <code>&lt;Input fullWidth /&gt;</code>
          </p>
          <Input fullWidth />
        </div>
      </div>

      
      <div className="btn-wrapper">
        <div className="box">
          <p>
            <code>&lt;Input multiline row="4" /&gt;</code>
          </p>
          <Input multiline row="4" />
        </div>
      </div>
    </>
  )
}

export default InputPage