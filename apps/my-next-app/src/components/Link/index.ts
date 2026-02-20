/** docs
 * If you encounter Functions cannot be passed directly to Client Components error from passing Next.js Link to Material UI component prop, you need to create a wrapper component with use client directive like the following:
 * https://mui.com/material-ui/integrations/nextjs/#next-js-v16-client-component-restriction
 */

"use client";
import Link from "next/link";

export default Link;
