import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Loading.scss'


function Loading({marginTop}) {
   return (
       <>
           <div className="loading" style={marginTop && { marginTop: marginTop }}>
               <div className="loading-item">
                   <SkeletonTheme baseColor="#212433" highlightColor="#444">
                       <Skeleton height={300} borderRadius={5} />
                   </SkeletonTheme>
               </div>
               <div className="loading-item">
                   <SkeletonTheme baseColor="#212433" highlightColor="#444">
                       <Skeleton height={300} borderRadius={5} />
                   </SkeletonTheme>
               </div>
               <div className="loading-item">
                   <SkeletonTheme baseColor="#212433" highlightColor="#444">
                       <Skeleton height={300} borderRadius={5} />
                   </SkeletonTheme>
               </div>
               <div className="loading-item">
                   <SkeletonTheme baseColor="#212433" highlightColor="#444">
                       <Skeleton height={300} borderRadius={5} />
                   </SkeletonTheme>
               </div>
               <div className="loading-item">
                   <SkeletonTheme baseColor="#212433" highlightColor="#444">
                       <Skeleton height={300} borderRadius={5} />
                   </SkeletonTheme>
               </div>
           </div>
       </>
   );
}

export default Loading
