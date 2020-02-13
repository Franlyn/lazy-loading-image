/* User defined parameters
 * minDistanceToViewport: an image will be lazy loaded only if 
   the distance between viewport and itself >= minDistanceToViewport
   Default value: 0

 * minNumImgOutsideViewport: lazy loading will be enabled only if 
   the number of images outside the viewport >= minDistanceToViewport
   Default value: 0

 * lazyLoadingMethods:
 	1 - dominate color placeholder
 	2 - Low quality image placeholder (LQIP)
 */




/* Steps:
 * Step 1: Get a list of images that are at least minDistanceToViewport
away from the viewport
 * Step 2: Check if #images outside the viewport >= minDistanceToViewport
 	if yes: continue
 	otherwise: return (lazy loading disabled)
 * Step 3: lazy load pictures from up to down
*/

