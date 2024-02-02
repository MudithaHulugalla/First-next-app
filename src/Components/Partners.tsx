import React from 'react'

const Partner = [
    {
        id: 1,
      
        imageSrc: "https://www.onrec.com/sites/onrec/directory/files/CIPD_Purple_logo_100mm_RGB_1.jpg",
        alt: "diploma course image",

    },
    {
        id: 2,
        
        imageSrc: "https://th.bing.com/th/id/R.906a2623b26324972aae6994ca36640a?rik=ZibOOli5FcaEHQ&riu=http%3a%2f%2fwww.stmarys.ac.uk%2fimage-library%2ficons%2fcmi-logo.x9c5453db.jpg&ehk=f6J1fWO6NeE%2b33zbAMjlKaJduPWc%2fP1UWcJrzvGuw6Y%3d&risl=&pid=ImgRaw&r=0",
        alt: "higher national image",
    },
    {
        id: 3,
       
        imageSrc: "https://cdn.arden.ac.uk/s3fs-public/logo/new-logo-list/APHEA-new.png",
        alt: "professional it  image",
    },
    {
        id: 4,
       
        imageSrc: "https://ventikmedia.com/wp-content/uploads/2022/05/Carolina-Ventik.png",
        alt: "undergraduate progarame image",
    },
    {
        id: 5,
        
        imageSrc: "https://d1b6cklsx99bgv.cloudfront.net/wp-content/uploads/2023/09/ACCA.png",
        alt: "workshop course image",
    },
    {
        id: 6,
        
        imageSrc: "https://nspa.org.uk/wp-content/uploads/2020/12/British-Psychological-Society.png",
        alt: "workshop course image",
    },
    {
        id: 7,
       
        imageSrc: "https://th.bing.com/th/id/OIP.-OfU_bed1bISfh1I85I41wAAAA?rs=1&pid=ImgDetMain",
        alt: "workshop course image",
    },
    {
        id: 8,
       
        imageSrc: "https://th.bing.com/th/id/R.334fcc090f3ac8e567594bc85f6e5bdf?rik=chukmvTOMPCX3g&riu=http%3a%2f%2fwww.abdo.org.uk%2fwp-content%2fuploads%2f2018%2f01%2fInstitute-Leadership-Management-450.png&ehk=uJqUhe%2fAuv4vOtqBm%2fPaN5pKsySxRPJGzVEpMeXauv0%3d&risl=&pid=ImgRaw&r=0",
        alt: "workshop course image",
    },
    {
        id:9,
        
        imageSrc: "https://www.qmul.ac.uk/busman/media/sbm/images/logos/CIMA_Short_University-Partner.png",
        alt: "workshop course image",
    },
    {
        id:10 ,
        
        imageSrc: "https://london.aru.ac.uk/_uploads/partners/APM_Academic%20Accreditation_RGB.jpg",
        alt: "workshop course image",
    }

]

const Partners = () => {
  return (
    <div className=' pt-10 px-40 bg-white'>
        <React.Fragment>
        <h1 className=' text-4xl text-center  text-blue-950 font-bold '>Accreditation and industry partners</h1>

      <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-5 gap-x-8 gap-y-12 pt-20  ">
        { Partner.map((Partners) => (
          <a key={ Partners.id} href="#">
            <div className="relative cursor-pointer">
              <img
                className="mx-auto h-22 w-22  duration-300 "
                src={ Partners.imageSrc}
                alt={ Partners.alt}
              />
              
            </div>
          </a>
        ))}
      </section>
    </React.Fragment>
       
    </div>
  )
}

export default Partners