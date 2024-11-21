import { motion } from 'framer-motion';
import { huntressLogo, proofpointLogo, sophosLogo } from '@/assets';

const partners = [
  { name: 'Huntress', logo: huntressLogo },
  { name: 'Proofpoint', logo: proofpointLogo },
  { name: 'Sophos', logo: sophosLogo },
];

const TrustedPartners = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col gap-y-2 text-center relative py-4 z-30 outline-0 outline-fuchsia-500 "
    >
      <h3 className=" font-jarkata text-gradient-clip text-white font-medium ~text-sm/2xl pb-0 capitalize">Our Trusted partners</h3>
                  {/* -- STARS FOR PARTNERS STRIP -- */}
      <div className="flex justify-center items-center space-x-8 py-0 outline-0 outline-lime-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className=" ~py-4/6 md:~px-2/28 flex justify-center items-center ~space-x-4/20 outline-0 outline-orange-500">
        {partners.map((partner) => (
          <img  key={partner.name} src={partner.logo} alt={partner.name} className="~h-6/10 bg-transparent object-cover outline-0 outline-lime-600 " />
        ))}
      </div>
    </motion.section>
  );
};

export default TrustedPartners;


