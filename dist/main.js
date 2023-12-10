(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(n){t(1,arguments);var o=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===o?new Date(n.getTime()):"number"==typeof n||"[object Number]"===o?new Date(n):("string"!=typeof n&&"[object String]"!==o||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){t(1,arguments);var o=n(e);return o.setDate(1),o.setHours(0,0,0,0),o}var r={};function a(){return r}function l(e,o){var r,l,u,s,i,c,d,g;t(1,arguments);var f=a(),m=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(r=null!==(l=null!==(u=null!==(s=null==o?void 0:o.weekStartsOn)&&void 0!==s?s:null==o||null===(i=o.locale)||void 0===i||null===(c=i.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==l?l:null===(d=f.locale)||void 0===d||null===(g=d.options)||void 0===g?void 0:g.weekStartsOn)&&void 0!==r?r:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=n(e),v=p.getDay(),w=(v<m?7:0)+v-m;return p.setDate(p.getDate()-w),p.setHours(0,0,0,0),p}function u(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(function(e,r){const a=document.querySelector(".calendarBody");a.innerHTML="";const s=o(new Date(r,e-1,1)).getDay(),i=function(e){t(1,arguments);var o=n(e),r=o.getFullYear(),a=o.getMonth(),l=new Date(0);return l.setFullYear(r,a+1,0),l.setHours(0,0,0,0),l.getDate()}(new Date(r,e-1)),c=function(e,r){return t(1,arguments),function(e,n,o){t(2,arguments);var r=l(e,o),a=l(n,o),s=r.getTime()-u(r),i=a.getTime()-u(a);return Math.round((s-i)/6048e5)}(function(e){t(1,arguments);var o=n(e),r=o.getMonth();return o.setFullYear(o.getFullYear(),r+1,0),o.setHours(0,0,0,0),o}(e),o(e),r)+1}(new Date(r,e-1)),d=function(e){t(1,arguments);var o=n(e),r=o.getMonth();return o.setFullYear(o.getFullYear(),r+1,0),o.setHours(23,59,59,999),o}(new Date(r,e-2,1)).getDate(),g=o(new Date(r,e+2,1)).getDate();console.log(d);for(let e=0;e<c;e++){const t=document.createElement("tr");t.classList.add("rowWeek");for(let n=1;n<=7;n++){const o=7*e+n-s;if(o>0&&o<=i){const e=document.createElement("td");e.textContent=o,t.appendChild(e)}else if(o<=0&&0===e){const e=document.createElement("td"),n=o+d;e.textContent=n,t.appendChild(e)}else{const e=document.createElement("td"),n=o-i+g-1;e.textContent=n,t.appendChild(e)}}a.appendChild(t)}})(12,2033)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDbkNRLEVBQWtCTCxFQUFXUixFQUNuQ1ksRUFBVUYsWUFBY0csRUFDeEJULEVBQUlPLFlBQVlDLEVBQ3BCLEtBQ0ssQ0FDRCxNQUFNQSxFQUFZL0IsU0FBU3dCLGNBQWMsTUFDbkNTLEVBQWtCTixFQUFXdkIsRUFBWWdCLEVBQWUsRUFDOURXLEVBQVVGLFlBQWNJLEVBQ3hCVixFQUFJTyxZQUFZQyxFQUNwQixDQUNKLENBQ0FoQyxFQUFVK0IsWUFBWVAsRUFDMUIsQ0FDSixFQU9KVyxDQUFxQixHQUFHLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXlzSW5Nb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFdlZWtzSW5Nb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sYXN0RGF5T2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldERhdGUoMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7Z2V0RGF5LCBnZXRZZWFyLCBnZXRNb250aCwgc3RhcnRPZk1vbnRoLCBlbmRPZk1vbnRoLCBnZXREYXlzSW5Nb250aCwgZ2V0V2Vla3NJbk1vbnRoLCBsYXN0RGF5T2ZNb250aH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyBkYSwgZWwgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuXG5jb25zdCBjYWxlbmRhciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0Q2FsZW5kYXIobW9udGgsIHllYXIpIHtcbiAgICAgICAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyQm9keScpO1xuICAgICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBjb25zdCBmaXJzdERheSA9IHN0YXJ0T2ZNb250aChuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDEpKTtcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdEYXlPZldlZWsgPSBmaXJzdERheS5nZXREYXkoKTtcbiAgICAgICAgY29uc3QgdG90YWxEYXlzID0gZ2V0RGF5c0luTW9udGgobmV3IERhdGUoeWVhciwgbW9udGggLSAxKSk7XG4gICAgICAgIGNvbnN0IHRvdGFsV2Vla3MgPSBnZXRXZWVrc0luTW9udGgobmV3IERhdGUoeWVhciwgbW9udGggLSAxKSk7XG4gICAgICAgIGNvbnN0IGxhc3RNb250aERheSA9IChlbmRPZk1vbnRoKG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMiwgMSkpKS5nZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IG5leHRNb250aERheSA9IChzdGFydE9mTW9udGgobmV3IERhdGUoeWVhciwgbW9udGggKyAyLCAxKSkpLmdldERhdGUoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0TW9udGhEYXkpXG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHdlZWtzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxXZWVrczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3Jvd1dlZWsnKTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBkYXkgPSAxOyBkYXkgPD0gNzsgZGF5KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleERheSA9IGkgKiA3ICsgZGF5IC0gc3RhcnRpbmdEYXlPZldlZWsgO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhEYXkgPiAwICYmIGluZGV4RGF5IDw9IHRvdGFsRGF5cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF5Q2VsbC50ZXh0Q29udGVudCA9IGluZGV4RGF5O1xuICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGF5Q2VsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleERheSA8PSAwICYmIGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRqdXN0ZWRQcmV2RGF5ID0gaW5kZXhEYXkgKyBsYXN0TW9udGhEYXk7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Q2VsbC50ZXh0Q29udGVudCA9IGFkanVzdGVkUHJldkRheTtcbiAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGp1c3RlZE5leHREYXkgPSBpbmRleERheSAtIHRvdGFsRGF5cyArIG5leHRNb250aERheSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Q2VsbC50ZXh0Q29udGVudCA9IGFkanVzdGVkTmV4dERheTtcbiAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGVtcHR5Q2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDYWxlbmRhcixcbiAgICB9XG59KSgpO1xuXG5jYWxlbmRhci5nZXRDYWxlbmRhcigxMiwyMDMzKSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5c0luTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGRheXMgYXJlIGluIEZlYnJ1YXJ5IDIwMDA/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlzSW5Nb250aChuZXcgRGF0ZSgyMDAwLCAxKSlcbiAqIC8vPT4gMjlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5c0luTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKCk7XG4gIHZhciBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKDApO1xuICBsYXN0RGF5T2ZNb250aC5zZXRGdWxsWWVhcih5ZWFyLCBtb250aEluZGV4ICsgMSwgMCk7XG4gIGxhc3REYXlPZk1vbnRoLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gbGFzdERheU9mTW9udGguZ2V0RGF0ZSgpO1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzL2luZGV4LmpzXCI7XG5pbXBvcnQgbGFzdERheU9mTW9udGggZnJvbSBcIi4uL2xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gXCIuLi9zdGFydE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldFdlZWtzSW5Nb250aFxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3MgYSBtb250aCBzcGFucy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzIHRoZSBtb250aCBpbiB0aGUgZ2l2ZW4gZGF0ZSBzcGFucy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB3ZWVrcyBkb2VzIEZlYnJ1YXJ5IDIwMTUgc3Bhbj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtzSW5Nb250aChuZXcgRGF0ZSgyMDE1LCAxLCA4KSlcbiAqIC8vPT4gNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LFxuICogLy8gaG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgZG9lcyBKdWx5IDIwMTcgc3Bhbj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtzSW5Nb250aChuZXcgRGF0ZSgyMDE3LCA2LCA1KSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gNlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrc0luTW9udGgoZGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MobGFzdERheU9mTW9udGgoZGF0ZSksIHN0YXJ0T2ZNb250aChkYXRlKSwgb3B0aW9ucykgKyAxO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrc1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3NcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgYXJlIGJldHdlZW4gNSBKdWx5IDIwMTQgYW5kIDIwIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNSlcbiAqIClcbiAqIC8vPT4gM1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LFxuICogLy8gaG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgYXJlIGJldHdlZW4gNSBKdWx5IDIwMTQgYW5kIDIwIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNSksXG4gKiAgIHsgd2Vla1N0YXJ0c09uOiAxIH1cbiAqIClcbiAqIC8vPT4gMlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZldlZWtMZWZ0ID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBzdGFydE9mV2Vla1JpZ2h0ID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZXZWVrTGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZXZWVrTGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZXZWVrUmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mV2Vla1JpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9XRUVLKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGxhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgbGFzdCBkYXkgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGxhc3QgZGF5IG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBsYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59Il0sIm5hbWVzIjpbIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInJlcXVpcmVkQXJncyIsInJlcXVpcmVkIiwiYXJncyIsImxlbmd0aCIsIlR5cGVFcnJvciIsInRvRGF0ZSIsImFyZ3VtZW50IiwiYXJndW1lbnRzIiwiYXJnU3RyIiwiT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic3RhY2siLCJOYU4iLCJzdGFydE9mTW9udGgiLCJkaXJ0eURhdGUiLCJkYXRlIiwic2V0RGF0ZSIsInNldEhvdXJzIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0YXJ0T2ZXZWVrIiwib3B0aW9ucyIsIl9yZWYiLCJfcmVmMiIsIl9yZWYzIiwiX29wdGlvbnMkd2Vla1N0YXJ0c09uIiwiX29wdGlvbnMkbG9jYWxlIiwiX29wdGlvbnMkbG9jYWxlJG9wdGlvIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMiIsIndlZWtTdGFydHNPbiIsImRpcnR5TnVtYmVyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwidG9JbnRlZ2VyIiwibG9jYWxlIiwiUmFuZ2VFcnJvciIsImRheSIsImdldERheSIsImRpZmYiLCJnZXREYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyIsInV0Y0RhdGUiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInNldFVUQ0Z1bGxZZWFyIiwibW9udGgiLCJ5ZWFyIiwidGFibGVCb2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwic3RhcnRpbmdEYXlPZldlZWsiLCJ0b3RhbERheXMiLCJtb250aEluZGV4IiwibGFzdERheU9mTW9udGgiLCJzZXRGdWxsWWVhciIsImdldERheXNJbk1vbnRoIiwidG90YWxXZWVrcyIsImRpcnR5RGF0ZUxlZnQiLCJkaXJ0eURhdGVSaWdodCIsInN0YXJ0T2ZXZWVrTGVmdCIsInN0YXJ0T2ZXZWVrUmlnaHQiLCJ0aW1lc3RhbXBMZWZ0IiwidGltZXN0YW1wUmlnaHQiLCJyb3VuZCIsImRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MiLCJnZXRXZWVrc0luTW9udGgiLCJsYXN0TW9udGhEYXkiLCJuZXh0TW9udGhEYXkiLCJsb2ciLCJpIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImluZGV4RGF5IiwiZGF5Q2VsbCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eUNlbGwiLCJhZGp1c3RlZFByZXZEYXkiLCJhZGp1c3RlZE5leHREYXkiLCJjYWxlbmRhciJdLCJzb3VyY2VSb290IjoiIn0=