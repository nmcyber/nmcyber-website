import { logo } from '@/assets'

export default function Logo() {
  return (
    <a href='/' className=' flex  ~text-sm/2xl items-center gap-2 '>
    <img
      src={logo}
      className=" ~w-8/10"
      alt="logo"
    />
    <p>
    NM<span className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-[#64CDF6] to-[#64CDF6]">Cyber</span>
    </p>
    </a>
  )
}
