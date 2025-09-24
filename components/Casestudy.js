import React, { useState } from 'react'
import Link from 'next/link'
import CaseStudyDownloadModal from './CaseStudyDownloadModal'

const Casestudy = ({ casestudy, gradientClass = 'from-emerald-50 via-white to-sky-50' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to get initials from title
  const getInitials = (title) => {
    if (!title) return 'CS';
    return title
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  // Function to render tags
  const renderTags = () => {
    const tags = [];

    // Add channel/service tags
    if (casestudy?.channel) {
      tags.push(casestudy.channel);
    }

    // Add industry tag
    if (casestudy?.industry) {
      tags.push(casestudy.industry);
    }

    // Add custom tags if available
    if (casestudy?.tags && Array.isArray(casestudy.tags)) {
      tags.push(...casestudy.tags.slice(0, 2)); // Limit to 2 additional tags
    }

    return tags.slice(0, 3).map((tag, index) => (
      <span
        key={index}
        className="inline-flex items-center border border-slate-300 rounded-full px-2 py-1 text-xs text-slate-600 bg-white"
      >
        {tag}
      </span>
    ));
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        
        {/* Header with logo/initials - Clickable */}
        <Link href={`/case-studies/${casestudy?.slug}`}>
          <div className={`relative h-40 bg-gradient-to-br ${gradientClass} flex items-center justify-center rounded-t-2xl cursor-pointer`}>
            {casestudy?.coverimage ? (
              <img
                src={casestudy.coverimage}
                alt={casestudy.title || 'Case Study'}
                className="w-full h-full object-contain rounded-t-2xl"
              />
            ) : (
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full font-bold bg-white text-slate-900 border border-slate-200 text-xl">
                {getInitials(casestudy?.title)}
              </span>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">

          {/* Title - Clickable */}
          <Link href={`/case-studies/${casestudy?.slug}`}>
            <h3 className="font-semibold text-slate-900 text-lg mb-2 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] group-hover:text-emerald-600 transition-colors cursor-pointer">
              {casestudy?.title || 'Case Study'}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm text-slate-600 mb-4 flex-1 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            {casestudy?.description || 'Detailed case study showing measurable results and growth strategies.'}
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-4">
            {renderTags()}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Link href={`/case-studies/${casestudy?.slug}`}>
              <button className="w-full sm:w-auto inline-flex items-center justify-center border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                Read Case Study →
              </button>
            </Link>

            {/* PDF Download button */}
            <button
              onClick={handleDownloadClick}
              className="w-full sm:w-auto inline-flex items-center justify-center border border-emerald-300 bg-emerald-50 rounded-xl px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              Download PDF ↓
            </button>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      <CaseStudyDownloadModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        casestudy={casestudy}
      />
    </>
  )
}

export default Casestudy


// import React from 'react'
// import Link from 'next/link'

// const Casestudy = ({ casestudy, gradientClass = 'from-emerald-50 via-white to-sky-50' }) => {

//   // Function to get initials from title
//   const getInitials = (title) => {
//     if (!title) return 'CS';
//     return title
//       .split(' ')
//       .slice(0, 2)
//       .map(word => word.charAt(0))
//       .join('')
//       .toUpperCase();
//   };

//   // Function to render tags
//   const renderTags = () => {
//     const tags = [];

//     // Add channel/service tags
//     if (casestudy?.channel) {
//       tags.push(casestudy.channel);
//     }

//     // Add industry tag
//     if (casestudy?.industry) {
//       tags.push(casestudy.industry);
//     }

//     // Add custom tags if available
//     if (casestudy?.tags && Array.isArray(casestudy.tags)) {
//       tags.push(...casestudy.tags.slice(0, 2)); // Limit to 2 additional tags
//     }

//     return tags.slice(0, 3).map((tag, index) => (
//       <span
//         key={index}
//         className="inline-flex items-center border border-slate-300 rounded-full px-2 py-1 text-xs text-slate-600 bg-white"
//       >
//         {tag}
//       </span>
//     ));
//   };

//   return (
//     <Link href={`/case-studies/${casestudy?.slug}`}>
//       <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col">

//         {/* Header with logo/initials */}
//         <div className={`relative h-40 bg-gradient-to-br ${gradientClass} flex items-center justify-center rounded-t-2xl`}>
//           {casestudy?.coverimage ? (
//             <img
//               src={casestudy.coverimage}
//               alt={casestudy.title || 'Case Study'}
//               className="w-full h-full object-contain rounded-t-2xl"
//             />
//           ) : (
//             <span className="inline-flex items-center justify-center w-16 h-16 rounded-full font-bold bg-white text-slate-900 border border-slate-200 text-xl">
//               {getInitials(casestudy?.title)}
//             </span>
//           )}
//         </div>

//         {/* Content */}
//         <div className="p-5 flex-1 flex flex-col">

//           {/* Title */}
//           <h3 className="font-semibold text-slate-900 text-lg mb-2 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] group-hover:text-emerald-600 transition-colors">
//             {casestudy?.title || 'Case Study'}
//           </h3>

//           {/* Description */}
//           <p className="text-sm text-slate-600 mb-4 flex-1 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
//             {casestudy?.description || 'Detailed case study showing measurable results and growth strategies.'}
//           </p>

//           {/* Tags */}
//           <div className="flex gap-2 flex-wrap mb-4">
//             {renderTags()}
//           </div>

//           {/* Footer */}
//           <div className="flex justify-between items-center">
//             <div className="flex gap-2">
//               <button className="inline-flex items-center border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
//                 Read Case Study →
//               </button>

//               {/* PDF Download button - show only if PDF is available */}
//               {/* {casestudy?.pdfUrl && ( */}
//                 <a
//                   href={casestudy.pdfUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center border border-emerald-300 bg-emerald-50 rounded-xl px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-100 transition-colors"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   Download PDF ↓
//                 </a>
//               {/* )} */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default Casestudy