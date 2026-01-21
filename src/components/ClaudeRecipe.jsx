import ReactMarkdown from 'https://esm.sh/react-markdown@7'
export default function ClaudeRecipe(props){
    return (
        <section>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
    )
}