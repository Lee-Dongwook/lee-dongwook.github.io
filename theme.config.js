import Github from './assets/github.svg';
import Velog from './assets/velog.svg';

export default {
  comments: (
    <>
    <div className="w-5/6 mx-auto" dangerouslySetInnerHTML={{ __html: '<script src="https://giscus.app/client.js" data-repo="officialrajdeepsingh/officialrajdeepsingh.dev" data-repo-id="R_kgDOIs4gPw" data-category="Q&A" data-category-id="DIC_kwDOIs4gP84CTV3Q" data-mapping="pathname" data-strict="1" data-reactions-enabled="1"data-emit-metadata="0" data-input-position="top" data-theme="dark_protanopia" data-lang="en" data-loading="lazy" crossorigin="anonymous" async></script>' }}>
    </div>
    </>
  ),
  footer: (<footer className="border-t-2 mx-auto flex">
  <p className="text-sm text-gray-500">© By Lee-Dongwook - 2024 </p>
  <span className='inline-flex mt-3 justify-center'>
    <a target="_blank" href="https://www.github.com/Lee-Dongwook">
      <Github />
    </a>
  </span>
  <span className='inline-flex mt-3 justify-center'>
    <a target="_blank" href="https://www.github.com/Lee-Dongwook">
      <Velog />
    </a>
  </span>
  <span className="inline-flex mt-4 justify-center">
    <a target="_blank" href="https://www.linkedin.com/in/dong-wook-lee-1095112a0/" className="ml-3 text-gray-500">
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    </a>
  </span>
</footer> ),
  unstable_faviconGlyph: "👋",
  navs: [
    
  ],
  readMore: 'Read Now',
  postFooter: (<div>Hello</div>),
  darkMode: true,
};