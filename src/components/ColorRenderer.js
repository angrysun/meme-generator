import Color from "./Color"

const colors = [{
  hex: '#61dafb',
  name: 'Turquoise Blues'
},
{
  hex: '#cd7fbb',
  name: 'Sky Magenta'
},
{
  hex: '#7b0901',
  name: 'Dark Burgundy Red'
},
{
  hex: '#33a58c',
  name: 'Niagara Fall'
}]

export default function ColorRenderer() {
  return (
    <div className='color-renderer'>
      {colors.map(color => <Color key={color.hex} hex={color.hex} name={color.name} />)}
    </div>
  )
}
