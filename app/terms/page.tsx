import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { company } from '@/lib/site-data'
export const metadata: Metadata = { title: 'Website Terms', description: 'Terms governing use of the Aurexis website.' }
const sections = [
{id:'website',title:'Using this website',paragraphs:['This website presents Aurexis Surface Transformations, its capabilities and selected work. You may browse and share links for lawful personal or business evaluation. You may not interfere with the site, misrepresent its content or use it to infringe another person’s rights.']},
{id:'content',title:'Content and intellectual property',paragraphs:['The Aurexis name, visual identity, writing, project presentation and original imagery are protected by applicable intellectual property laws. No licence is granted except the limited right to view the website.','Project imagery is illustrative of capability and context. Finishes can vary with substrate, light, screen settings and material availability.']},
{id:'enquiries',title:'Enquiries and proposals',paragraphs:['Sending an enquiry does not create a client relationship or confirm availability. A project begins only when scope, price, programme and applicable terms are agreed in writing. Website statements do not replace a project-specific specification, proposal or warranty record.']},
{id:'links',title:'External services',paragraphs:['Links to maps, Instagram, WhatsApp and other external services are provided for convenience. Their own terms and privacy practices apply, and Aurexis is not responsible for their availability or content.']},
{id:'liability',title:'Website availability',paragraphs:['We aim to keep information accurate and the website available, but cannot promise uninterrupted access or that every item is complete at all times. To the extent permitted by law, Aurexis is not liable for loss arising solely from reliance on general website content.']},
{id:'contact',title:'Contact and governing law',paragraphs:[`Questions about these terms may be sent to ${company.email}. These website terms are governed by the laws of South Africa, subject to applicable consumer protections.`]},
]
export default function TermsPage(){return <LegalPage eyebrow="Legal" title="Terms, stated plainly." intro="The conditions for using this website and understanding its content." updated="1 August 2026" sections={sections} />}
