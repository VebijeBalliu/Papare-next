'use client';

import React, { useState, useEffect } from "react";

interface Dog {
    id: number;
    name: string;
    image?: {
        url: string;
    };
    bred_for?: string;
}

const SearchPage: React.FC = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const res = await fetch("https://api.thedogapi.com/v1/breeds");
                const data = await res.json();
                setDogs(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDogData();
    }, []);

  
    const filteredDogs = dogs.filter((dog) =>
        dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="container py-5">
            <div className="text-center mb-4">
                <h1 className="fs-0 fw-bold text-black">Search for a Dog Breed</h1>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter dog breed"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            
            {searchTerm && filteredDogs.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-4">
                    {filteredDogs.map((dog) => (
                        <div className="col mb-4" key={dog.id}>
                            <div className="card bg-dark text-white h-100">
                                <img
                                    src={dog.image?.url || "fallback-image-url.jpg"}
                                    alt={dog.name}
                                    className="card-img-top"
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{dog.name}</h3>
                                    <p className="card-text">Bred For: {dog.bred_for || "Unknown"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
               
                searchTerm ? (
                    <p className="text-center">No dog breed found.</p>
                ) : (
                    <p className="text-center">Start typing to search for a dog breed.</p>
                )
            )}
        </section>
    );
};

export default SearchPage;
