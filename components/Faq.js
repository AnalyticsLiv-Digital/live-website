import React from 'react'

const Faq = ({ content }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {content?.map((item, index) => (
                <details key={index} className="group card p-5">
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                        {item?.question}
                        <span className="text-slate-400 group-open:rotate-180 transition">▾</span>
                    </summary>
                    <p className="mt-2 text-slate-700">{item?.answer}</p>
                </details>
            ))}
        </div>
    )
}

export default Faq
