import { useState } from 'react'
import { Option, Select as SelectComponent } from 'components/select'
import {
  Column,
  ComponentContainer,
  ComponentWrapper,
} from 'components/styles/layout'
import { SubTitle } from 'components/styles/text'

const data = [
  { id: 1, name: 'TEST1' },
  { id: 2, name: 'TEST2' },
  { id: 3, name: 'TEST3' },
  { id: 4, name: 'TEST4' },
  { id: 5, name: 'TEST5' },
]

function Select() {
  const [isOpen1, setIsOpen1] = useState<boolean>(false)
  const [isOpen2, setIsOpen2] = useState<boolean>(false)
  const [isOpen3, setIsOpen3] = useState<boolean>(false)
  const [isOpen4, setIsOpen4] = useState<boolean>(false)
  const [isOpen5, setIsOpen5] = useState<boolean>(false)
  const [isOpen6, setIsOpen6] = useState<boolean>(false)
  const [isOpen7, setIsOpen7] = useState<boolean>(false)
  const [isOpen8, setIsOpen8] = useState<boolean>(false)
  const [isOpen9, setIsOpen9] = useState<boolean>(false)
  const [isOpen10, setIsOpen10] = useState<boolean>(false)
  const [isOpen11, setIsOpen11] = useState<boolean>(false)
  const [isOpen12, setIsOpen12] = useState<boolean>(false)
  const [value1, setValue1] = useState(data[0].name)
  const [value2, setValue2] = useState(data[0].name)
  const [value3, setValue3] = useState(data[0].name)
  const [value4, setValue4] = useState(data[0].name)
  const [value5, setValue5] = useState(data[0].name)
  const [value6, setValue6] = useState(data[0].name)
  const [value7, setValue7] = useState(data[0].name)
  const [value8, setValue8] = useState(data[0].name)
  const [value9, setValue9] = useState(data[0].name)
  const [value10, setValue10] = useState(data[0].name)
  const [value11, setValue11] = useState(data[0].name)
  const [value12, setValue12] = useState(data[0].name)

  return (
    <Column gap={40}>
      <ComponentContainer>
        <SubTitle>Default</SubTitle>
        <ComponentWrapper>
          <SelectComponent
            isOpen={isOpen1}
            onOpen={() => setIsOpen1(true)}
            onClose={() => setIsOpen1(false)}
            onChange={(v) => setValue1(v)}
            value={value1}
            size='small'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen2}
            onOpen={() => setIsOpen2(true)}
            onClose={() => setIsOpen2(false)}
            onChange={(v) => setValue2(v)}
            value={value2}
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen3}
            onOpen={() => setIsOpen3(true)}
            onClose={() => setIsOpen3(false)}
            onChange={(v) => setValue3(v)}
            value={value3}
            size='large'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
        </ComponentWrapper>
      </ComponentContainer>
      <ComponentContainer>
        <SubTitle>Contained</SubTitle>
        <ComponentWrapper>
          <SelectComponent
            isOpen={isOpen4}
            onOpen={() => setIsOpen4(true)}
            onClose={() => setIsOpen4(false)}
            onChange={(v) => setValue4(v)}
            value={value4}
            type='contained'
            size='small'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen5}
            onOpen={() => setIsOpen5(true)}
            onClose={() => setIsOpen5(false)}
            onChange={(v) => setValue5(v)}
            value={value5}
            type='contained'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen6}
            onOpen={() => setIsOpen6(true)}
            onClose={() => setIsOpen6(false)}
            onChange={(v) => setValue6(v)}
            value={value6}
            type='contained'
            size='large'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
        </ComponentWrapper>
      </ComponentContainer>
      <ComponentContainer>
        <SubTitle>Underline</SubTitle>
        <ComponentWrapper>
          <SelectComponent
            isOpen={isOpen7}
            onOpen={() => setIsOpen7(true)}
            onClose={() => setIsOpen7(false)}
            onChange={(v) => setValue7(v)}
            value={value7}
            type='underline'
            size='small'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen8}
            onOpen={() => setIsOpen8(true)}
            onClose={() => setIsOpen8(false)}
            onChange={(v) => setValue8(v)}
            value={value8}
            type='underline'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen9}
            onOpen={() => setIsOpen9(true)}
            onClose={() => setIsOpen9(false)}
            onChange={(v) => setValue9(v)}
            value={value9}
            type='underline'
            size='large'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
        </ComponentWrapper>
      </ComponentContainer>
      <ComponentContainer>
        <SubTitle>Position</SubTitle>
        <ComponentWrapper>
          <SelectComponent
            isOpen={isOpen10}
            onOpen={() => setIsOpen10(true)}
            onClose={() => setIsOpen10(false)}
            onChange={(v) => setValue10(v)}
            value={value10}
            type='contained'
            size='small'
            position='top'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen11}
            onOpen={() => setIsOpen11(true)}
            onClose={() => setIsOpen11(false)}
            onChange={(v) => setValue11(v)}
            value={value11}
            type='contained'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
          <SelectComponent
            isOpen={isOpen12}
            onOpen={() => setIsOpen12(true)}
            onClose={() => setIsOpen12(false)}
            onChange={(v) => setValue12(v)}
            value={value12}
            type='contained'
            size='large'
            position='top'
          >
            {data.map((item) => (
              <Option key={item.id}>{item.name}</Option>
            ))}
          </SelectComponent>
        </ComponentWrapper>
      </ComponentContainer>
    </Column>
  )
}

export default Select
