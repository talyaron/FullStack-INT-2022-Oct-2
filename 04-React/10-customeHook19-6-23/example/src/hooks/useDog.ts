import { useEffect, useState } from "react";

const useDog = () => {
    const [dog, setDog] = useState<Dog | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                const { message } = data;
                setDog(message);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                return err;
            });
    }, []);

    return { dog, error, loading };
}
export default useDog;