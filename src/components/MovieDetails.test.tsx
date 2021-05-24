import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

test('renders movie title', () => {
    const sampleMovie = {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_date: "2001-12-18",
        vote_average: 8.4,
        tagline: "One ring to rule them all",
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
    }
    render(<MovieDetails movie={sampleMovie} />);
    const title = screen.getByText("The Lord of the Rings: The Fellowship of the Ring");
    expect(title).toBeInTheDocument();
});

test('renders movie release date', () => {
    const sampleMovie = {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_date: "2001-12-18",
        vote_average: 8.4,
        tagline: "One ring to rule them all",
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
    }
    render(<MovieDetails movie={sampleMovie} />);
    const releaseDate = screen.getByText("RELEASE DATE: 2001-12-18");
    expect(releaseDate).toBeInTheDocument();
});

test('renders movie release date', () => {
    const sampleMovie = {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_date: "2001-12-18",
        vote_average: 8.4,
        tagline: "One ring to rule them all",
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
    }
    render(<MovieDetails movie={sampleMovie} />);
    const voteAverage = screen.getByText("VOTE AVERAGE: 8.4/10");
    expect(voteAverage).toBeInTheDocument();
});

test('renders movie overview', () => {
    const sampleMovie = {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_date: "2001-12-18",
        vote_average: 8.4,
        tagline: "One ring to rule them all",
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
    }
    render(<MovieDetails movie={sampleMovie} />);
    const overview = screen.getByText("Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.");
    expect(overview).toBeInTheDocument();
});

test('does not render tagline', () => {
    const sampleMovie = {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_date: "2001-12-18",
        vote_average: 8.4,
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
    }
    render(<MovieDetails movie={sampleMovie} />);
    const tagline = screen.queryByText("One ring to rule them all");
    expect(tagline).not.toBeInTheDocument();
});

test('does not render genre', () => {
    const sampleMovie = {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        release_date: "2001-12-18",
        vote_average: 8.4,
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
    }
    render(<MovieDetails movie={sampleMovie} />);
    const genres = screen.queryByText("Fantasy");
    expect(genres).not.toBeInTheDocument();
});