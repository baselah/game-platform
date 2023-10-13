import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

export default function SearchInput() {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
   <Input borderRadius={20} placeholder='search games...' src='' variant={'filled'}></Input>
   </InputGroup>
  )
}
