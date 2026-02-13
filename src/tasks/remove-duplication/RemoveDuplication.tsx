interface IData {
  id: number
  message: string
  name: string
}

const data: IData[] = [
  { id: 1, message: 'Saved', name: 'Save' },
  { id: 2, message: 'Deleted', name: 'Delete' },
  { id: 3, message: 'Canceled', name: 'Cancel' }
]

export const RemoveDuplication = () => {
  return (
    <div>
      {data.map(button => (
        <ButtonItem key={button.id} {...button} />
      ))}
    </div>
  )
}

type TypeButton = Omit<IData, 'id'>

export const ButtonItem = ({ name, message }: TypeButton) => {
  return <button onClick={() => alert(message)}>{name}</button>
}
