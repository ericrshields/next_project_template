'use client';

import { strings } from "@/lib/strings.enUS";

export default function Page() {

    /**
     * Render
     */
    return (
        <>
            <main>
                Hello World!
            </main>

            <footer>
                {strings.copyright}
            </footer>
        </>
    );
}