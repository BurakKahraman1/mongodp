import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default function CoreValues({mData}) {
    return (
        <section className="relative">
            <Head>
                <title>Core Values | {mData.companyName}</title>
            </Head>
            <Header/>
            <section className="pageHeader min-h-[250px] flex flex-row justify-center items-end bg-hmfooterBg mb-5">
                <h3 className="text-center my-10 py-5 font-semibold text-4xl text-hmGreen ">Core Values</h3>
            </section>
            <div className="container mx-auto px-2.5">
                <div className="w-full xl:w-5/6 bg-hmfooterBg mx-auto rounded-2xl mb-10 py-10 px-5">
                    <h4 className="text-hmDark font-semibold text-[25px]">Hi! We are vocal advocates of the health
                        revolution.</h4>
                    <p className="text-md text-hmsectionTitle mb-5">We argue that a long and healthy life is a
                        fundamental human right. That’s why we are committed to striving to ensure that changing
                        healthcare industry policies are equitable and sustainable among the most vulnerable segments of
                        society.
                        <br/>There is no greater injustice than when people do not have the opportunity to live their
                        best life. Ending this inequality is core to our mission and values.
                    </p>
                    <h4 className="text-hmDark font-semibold text-[25px]">Security</h4>
                    <p className="text-md text-hmsectionTitle mb-5">From our physical security to the cybersecurity of
                        our systems, we take data privacy and information security seriously.
                        <br/>We know that if we do not protect the data of our stakeholders and users, they cannot trust
                        us.
                        <br/>We know that our customers trust us with their most sensitive information, so we are
                        obsessed with protecting it.
                        <br/>Trust is at the heart of every relationship with our customers, with each other and with
                        ourselves.
                    </p>
                    <h4 className="text-hmDark font-semibold text-[25px]">Creativity</h4>
                    <p className="text-md text-hmsectionTitle mb-5">The status quo isn’t good enough for us, and it
                        shouldn’t be for you either. We set out to disrupt an entire industry by imagining and realizing
                        a new way of doing things. We challenge ourselves to find new ways of thinking and doing, even
                        if it means breaking with tradition, and we see mistakes as a necessary part of the learning and
                        growing process. We believe creativity is about seeing the world through a new lens and taking
                        risks to make things better. Creativity does not mean chaos. It means taking risks and not being
                        afraid to fail. It means doing something new, something different, something that didn’t exist
                        before. It’s not easy, but it’s worth it.</p>
                    <h4 className="text-hmDark font-semibold text-[25px]">Give back</h4>
                    <p className="text-md text-hmsectionTitle mb-5">Whenever possible, we will pay our debt to the world
                        in the form of products, time and resources.
                        <br/>We make giving back a priority, it’s important to who we are.
                        <br/>For this reason, we will use 8% of our profits to provide access to health services for
                        those in need. We create solutions to make it easier for our users and partners to donate as
                        well. We all have the opportunity to give back to the world our achievements every day by
                        donating treatment or supporting our mission of equality in health. Working hand in hand with
                        our stakeholders in the field, we will empower local health professionals to best serve their
                        communities.
                        <br/>We will follow our donations and announce them to the public so that everyone can see the
                        good we do. Preaching goodness does not mean showing off. Effective publicity is a provocative
                        way to encourage our competitors and stakeholders to do good.
                    </p>
                    <h4 className="text-hmDark font-semibold text-[25px]">Sustainability</h4>
                    <p className="text-md text-hmsectionTitle mb-5">We look at everything we do long-term. Our success
                        depends on the well-being of our users, employees, stakeholders and the planet. We are ruthless
                        in our pursuit of sustainable solutions that put three important issues at the heart of our
                        company: people, planet and profit. We know this is not only the right thing to do, but also the
                        wisest thing to do. Sustainability does not mean sacrificing the present for tomorrow. It means
                        creating value for all stakeholders over time by integrating systems thinking and understanding
                        of natural cycles into our decision-making.</p>
                    <h4 className="text-hmDark font-semibold text-[25px]">Competition</h4>
                    <p className="text-md text-hmsectionTitle mb-5">We compete to win for the benefit of our customers,
                        employees and shareholders. We do not see competition as a dirty word for us, on the contrary,
                        we think it is a source of energy and opportunity, the driving force of human progress. What
                        brought us here is not going to get us where we want to go. Competition does not mean “winning
                        at any cost”. It means learning from the losses and always coming back stronger. We play to win,
                        but we always have dignity.</p>
                    <h4 className="text-hmDark font-semibold text-[25px]">Transparency</h4>
                    <p className="text-md text-hmsectionTitle mb-5">We are open and honest with each other. Transparency
                        breeds trust, and trust is the foundation of any strong relationship. We believe that when we
                        are vulnerable and authentic to each other, we can truly work together as a team. Transparency
                        does not mean disrespect for privacy. Transparency means being honest, even when it’s
                        uncomfortable. This means we are willing to ask hard questions, experiment openly, and learn
                        together.</p>
                    <h4 className="text-hmDark font-semibold text-[25px]">Artificial intelligence</h4>
                    <p className="text-md text-hmsectionTitle mb-5">We are relentless learners who use data to develop
                        our insights. We think artificial intelligence for data is one of the most important things.
                        Artificial intelligence is not a cold and soulless automaton. It is our imitations and social
                        intelligence mirrors that will show us what we are, including our biases, judgment calls, and
                        creativity. It’s all about showing them how to perceive the world. Machine learning used for war
                        machines is wreaking havoc on our planet. That’s why we must develop new AI systems that work
                        for the good that helps us protect our little blue planet that constantly learns for Life and
                        moves with us for life. We want human and machine intelligence to work together to serve the
                        society, the planet and all living things at the heart of life. We are determined to develop our
                        artificial intelligence, which is at the heart of our company, with all our might and resources,
                        until hunger, justice and health inequality on our planet ends.</p>
                </div>
            </div>
            <Footer/>
        </section>
    )
}
