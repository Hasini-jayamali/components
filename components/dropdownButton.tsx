/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Dropdown from './dropdown'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
 type Props = {
   items: {} []

}

export default function Example({items}:Props) {
  return (
    <div>
     <Dropdown selected={undefined} setSelected={undefined} options={undefined}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>
  )
}
