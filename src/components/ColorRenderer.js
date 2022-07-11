import Color from './Color';

const colors = [{
  hex: '#61dafb',
  name: 'Turquoise Blue'
},
{
  hex: '#cd7fbb',
  name: 'Sky Magenta'
},
{
  hex: '#7b0901',
  name: 'Dark Burgundy'
},
{
  hex: '#33a58c',
  name: 'Niagara'
}]

export default function ColorRenderer() {
  return (
    <div className='color-renderer'>
      {colors.map(color => <Color key={color.hex} {...color} />)}
    </div>
  )
}
