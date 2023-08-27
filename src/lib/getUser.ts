import { IUser } from "@/app/@types/user";

export async function getUser(username: string): Promise<IUser> {
    const response = await fetch(`https://api.github.com/users/${username}`, {
        cache: "force-cache",
        next: {
            revalidate: 3600,
        },
    });

    if (!response.ok) {
        throw new Error("Usuário não encontrado");
    }

    return response.json();

}