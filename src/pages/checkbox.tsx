import { Checkbox as CheckboxComponent } from 'components/checkbox'
import { Column, ComponentWrapper } from 'components/layout'
import { SubTitle } from 'components/text'

function Checkbox() {
  return (
    <Column gap={40}>
      <Column gap={10}>
        <SubTitle>Small</SubTitle>
        <ComponentWrapper>
          <CheckboxComponent
            color='default'
            checked={true}
            label='Default'
            size='small'
          />
          <CheckboxComponent
            color='primary'
            checked={true}
            label='Primary'
            size='small'
          />
          <CheckboxComponent
            color='secondary'
            checked={true}
            label='Secondary'
            size='small'
          />
          <CheckboxComponent
            color='default'
            checked={false}
            label='UnChecked'
            size='small'
          />
          <CheckboxComponent
            color='default'
            checked={true}
            label='Disabled'
            size='small'
            disabled
          />
          <CheckboxComponent
            color='default'
            checked={false}
            label='Disabled'
            size='small'
            disabled
          />
        </ComponentWrapper>
      </Column>
      <Column gap={10}>
        <SubTitle>Medium</SubTitle>
        <ComponentWrapper>
          <CheckboxComponent color='default' checked={true} label='Default' />
          <CheckboxComponent color='primary' checked={true} label='Primary' />
          <CheckboxComponent
            color='secondary'
            checked={true}
            label='Secondary'
          />
          <CheckboxComponent
            color='default'
            checked={false}
            label='UnChecked'
          />
          <CheckboxComponent
            color='default'
            checked={true}
            label='Disabled'
            disabled
          />
          <CheckboxComponent
            color='default'
            checked={false}
            label='Disabled'
            disabled
          />
        </ComponentWrapper>
      </Column>
      <Column gap={10}>
        <SubTitle>Large</SubTitle>
        <ComponentWrapper>
          <CheckboxComponent
            color='default'
            checked={true}
            label='Default'
            size='large'
          />
          <CheckboxComponent
            color='primary'
            checked={true}
            label='Primary'
            size='large'
          />
          <CheckboxComponent
            color='secondary'
            checked={true}
            label='Secondary'
            size='large'
          />
          <CheckboxComponent
            color='default'
            checked={false}
            label='UnChecked'
            size='large'
          />
          <CheckboxComponent
            color='default'
            checked={true}
            label='Disabled'
            size='large'
            disabled
          />
          <CheckboxComponent
            color='default'
            checked={false}
            label='Disabled'
            size='large'
            disabled
          />
        </ComponentWrapper>
      </Column>
      <Column gap={10}>
        <SubTitle>Custom Color</SubTitle>
        <ComponentWrapper>
          <CheckboxComponent
            customColor='#000000'
            checked={true}
            label='Black'
            size='small'
          />
          <CheckboxComponent
            customColor='#ffc77c'
            checked={true}
            label='Antiquewhite'
          />
          <CheckboxComponent
            customColor='yellowgreen'
            checked={true}
            label='Yellowgreen'
            size='large'
          />
        </ComponentWrapper>
      </Column>
    </Column>
  )
}

export default Checkbox
