import type { JSX } from 'preact'
import { h } from 'preact'

export default function YoutubeIcon(props: JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 8.467 8.467'
      fill='currentColor'
      {...props}
    >
      <path
        d='M1.059 0C.472 0 0 .472 0 1.059v6.35c0 .586.472 1.058 1.058 1.058h6.35c.586 0 1.058-.472 1.058-1.058v-6.35C8.467.472 7.995 0 7.409 0zm3.175 2.242s1.768 0 2.208.119a.71.71 0 0 1 .5.503c.118.444.118 1.369.118 1.369s0 .926-.118 1.369a.71.71 0 0 1-.5.503c-.441.119-2.208.119-2.208.119s-1.768 0-2.208-.119a.71.71 0 0 1-.5-.503c-.118-.444-.118-1.369-.118-1.369s0-.925.118-1.369a.71.71 0 0 1 .499-.503c.441-.119 2.209-.119 2.209-.119zm-.578 1.151v1.681l1.477-.84z'
        fillRule='evenodd'
      />
    </svg>
  )
}
