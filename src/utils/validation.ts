import { FormType } from "@/types/type"


export default function validation(form: FormType[], obj: object) {
    const missed = form.filter(form => {
        return !obj[form.key as keyof typeof obj]
    })

    return missed[0]?.label

}
