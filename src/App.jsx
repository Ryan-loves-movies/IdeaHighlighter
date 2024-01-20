import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

// const SummaryBot = require('summarybot')
import SummaryBot from "summarybot";

const getDocumentWindow = (function () {
	const windowCache = new Map();
	const closure = function (doc, _default = null) {
		if (windowCache.has(doc)) return windowCache.get(doc);
		if (window.document === doc) {
			windowCache.set(doc, window);
			return window;
		}
		for (let i = 0; i < window.frames.length; ++i) {
			try {
				if (window.frames[i].document === doc) {
					windowCache.set(doc, window.frames[i]);
					return window.frames[i];
				}
			} catch (err) {}
		}
		return _default;
	};
	return closure;
})();

function App() {
	const [count, setCount] = useState(0);
	const summarizer = new SummaryBot();

	useEffect(() => {
		console.log(document.body);
		console.log(getDocumentWindow());
	});
	const output = summarizer.run(
		`Neuro-linguistic programming (NLP) is a pseudoscientific approach to communication, personal development and psychotherapy, that first appeared in Richard Bandler and John Grinder's 1975 book The Structure of Magic I. NLP asserts that there is a connection between neurological processes, language and acquired behavioral patterns, and that these can be changed to achieve specific goals in life.[1][2]: 2  According to Bandler and Grinder, NLP can treat problems such as phobias, depression, tic disorders, psychosomatic illnesses, near-sightedness,[3] allergy, the common cold,[a] and learning disorders,[5][6] often in a single session. They also claim that NLP can "model" the skills of exceptional people, allowing anyone to acquire them.[7]: 5–6 [8]

NLP has been adopted by some hypnotherapists as well as by companies that run seminars marketed as leadership training to businesses and government agencies.[9][10]

There is no scientific evidence supporting the claims made by NLP advocates, and it has been called a pseudoscience.[11][12][13] Scientific reviews have shown that NLP is based on outdated metaphors of the brain's inner workings that are inconsistent with current neurological theory, and that NLP contain numerous factual errors.[10][14] Reviews also found that research that favored NLP contained significant methodological flaws, and that there were three times as many studies of a much higher quality that failed to reproduce the claims made by Bandler, Grinder, and other NLP practitioners.[12][13]

Early development
According to Bandler and Grinder, NLP consists of a methodology termed modeling, plus a set of techniques that they derived from its initial applications.[7]: 6 [15] They derived many of the fundamental techniques from the work of Virginia Satir, Milton Erickson and Fritz Perls.[16]: 8  Bandler and Grinder also drew upon the theories of Gregory Bateson, Alfred Korzybski and Noam Chomsky (particularly transformational grammar),[7]: 6 [17][18] as well as ideas and techniques from Carlos Castaneda.[19]: 41 

Bandler and Grinder claim that their methodology can codify the structure inherent to the therapeutic "magic" as performed in therapy by Perls, Satir and Erickson, and indeed inherent to any complex human activity. From that codification, they claim, the structure and its activity can be learned by others. Their 1975 book, The Structure of Magic I: A Book about Language and Therapy, is intended to be a codification of the therapeutic techniques of Perls and Satir.[7]: 6 

Bandler and Grinder say that they used their own process of modeling to model Virginia Satir so they could produce what they termed the Meta-Model, a model for gathering information and challenging a client's language and underlying thinking.[7]: 6 [20] They claim that by challenging linguistic distortions, specifying generalizations, and recovering deleted information in the client's statements, the transformational grammar concept of surface structure yields a more complete representation of the underlying deep structure and therefore has therapeutic benefit.[21][22] Also derived from Satir were anchoring, future pacing and representational systems.[23]

In contrast, the Milton-Model—a model of the purportedly hypnotic language of Milton Erickson—was described by Bandler and Grinder as "artfully vague" and metaphoric.[4]: 240  The Milton-Model is used in combination with the Meta-Model as a softener, to induce "trance" and to deliver indirect therapeutic suggestion.[24]

Psychologist Jean Mercer writes that Chomsky's theories "appear to be irrelevant" to NLP.[25] Linguist Karen Stollznow describes Bandler's and Grinder's reference to such experts as namedropping. Other than Satir, the people they cite as influences did not collaborate with Bandler or Grinder. Chomsky himself has no association with NLP, with his work being theoretical in nature and having no therapeutic element. Stollznow writes, "[o]ther than borrowing terminology, NLP does not bear authentic resemblance to any of Chomsky's theories or philosophies—linguistic, cognitive or political."[17]

According to André Muller Weitzenhoffer, a researcher in the field of hypnosis, "the major weakness of Bandler and Grinder's linguistic analysis is that so much of it is built upon untested hypotheses and is supported by totally inadequate data."[26]: 304  Weitzenhoffer adds that Bandler and Grinder misuse formal logic and mathematics,[26]: 300–301  redefine or misunderstand terms from the linguistics lexicon (e.g., nominalization),[26]: 304–305  create a scientific façade by needlessly complicating Ericksonian concepts with unfounded claims,[26]: 307  make factual errors,[26]: 306  and disregard or confuse concepts central to the Ericksonian approach.[26]: 306 

More recently, Bandler has claimed, "NLP is based on finding out what works and formalizing it. In order to formalize patterns I utilized everything from linguistics to holography ... The models that constitute NLP are all formal models based on mathematical, logical principles such as predicate calculus and the mathematical equations underlying holography."[27] There is no mention of the mathematics of holography nor of holography in general in McClendon's,[19] Spitzer's,[23] or Grinder's[28] account of the development of NLP.

On the matter of the development of NLP, Grinder recollects:[29]

My memories about what we thought at the time of discovery (with respect to the classic code we developed—that is, the years 1973 through 1978) are that we were quite explicit that we were out to overthrow a paradigm and that, for example, I, for one, found it very useful to plan this campaign using in part as a guide the excellent work of Thomas Kuhn (The Structure of Scientific Revolutions) in which he detailed some of the conditions which historically have obtained in the midst of paradigm shifts. For example, I believe it was very useful that neither one of us were qualified in the field we first went after—psychology and in particular, its therapeutic application; this being one of the conditions which Kuhn identified in his historical study of paradigm shifts.

The philosopher Robert Todd Carroll responded that Grinder has not understood Kuhn's text on the history and philosophy of science, The Structure of Scientific Revolutions. Carroll replies: (a) individual scientists never have nor are they ever able to create paradigm shifts volitionally and Kuhn does not suggest otherwise; (b) Kuhn's text does not contain the idea that being unqualified in a field of science is a prerequisite to producing a result that necessitates a paradigm shift in that field and (c) The Structure of Scientific Revolutions is foremost a work of history and not an instructive text on creating paradigm shifts and such a text is not possible—extraordinary discovery is not a formulaic procedure. Carroll explains that a paradigm shift is not a planned activity, rather it is an outcome of scientific effort within the dominant paradigm that produces data that cannot be adequately accounted for within the current paradigm—hence a paradigm shift, i.e. the adoption of a new paradigm. In developing NLP, Bandler and Grinder were not responding to a paradigmatic crisis in psychology nor did they produce any data that caused a paradigmatic crisis in psychology. There is no sense in which Bandler and Grinder caused or participated in a paradigm shift. "What did Grinder and Bandler do that makes it impossible to continue doing psychology ... without accepting their ideas? Nothing," argues Carroll.[30]

Commercialization and evaluation
By the late 1970s, the human potential movement had developed into an industry and provided a market for some NLP ideas. At the center of this growth was the Esalen Institute at Big Sur, California. Perls had led numerous Gestalt therapy seminars at Esalen. Satir was an early leader and Bateson was a guest teacher. Bandler and Grinder claimed that in addition to being a therapeutic method, NLP was also a study of communication and began marketing it as a business tool, claiming that, "if any human being can do anything, so can you."[20] After 150 students paid $1,000 each for a ten-day workshop in Santa Cruz, California, Bandler and Grinder gave up academic writing and started producing popular books from seminar transcripts, such as Frogs into Princes, which sold more than 270,000 copies. According to court documents relating to an intellectual property dispute between Bandler and Grinder, Bandler made more than $800,000 in 1980 from workshop and book sales.[20]

A community of psychotherapists and students began to form around Bandler and Grinder's initial works, leading to the growth and spread of NLP as a theory and practice.[31] For example, Tony Robbins trained with Grinder and utilized a few ideas from NLP as part of his own self-help and motivational speaking programmes.[32] Bandler led several unsuccessful efforts to exclude other parties from using NLP.[33] Meanwhile, the rising number of practitioners and theorists led NLP to become even less uniform than it was at its foundation.[17] Prior to the decline of NLP, scientific researchers began testing its theoretical underpinnings empirically, with research indicating a lack of empirical support for NLP's essential theories.[13] The 1990s were characterized by fewer scientific studies evaluating the methods of NLP than the previous decade. Tomasz Witkowski attributes this to a declining interest in the debate as the result of a lack of empirical support for NLP from its proponents.[13]

Main components and core concepts
NLP can be understood in terms of three broad components: subjectivity, consciousness, and learning.

According to Bandler and Grinder, people experience the world subjectively and create subjective representations of our experience. These subjective representations of experience are constituted in terms of five senses and language. That is to say subjective conscious experience is in terms of the traditional senses of vision, audition, tactition, olfaction and gustation such that when an individual imagines themselves doing something, recalls an event, or anticipates the future, they will see images, hear sounds, taste flavours, feel tactile sensations, smell odours and think in some natural language.[34][2]: 13–14  Furthermore it is claimed that these subjective representations of experience have a discernible structure, a pattern.[2]: 7 

Bandler and Grinder claims that behavior can be described and understood in terms of these sense-based subjective representations. Behavior is broadly conceived to include verbal and non-verbal communication, incompetent, maladaptive or "pathological" behavior as well as effective or skillful behavior.[2]: 36 [35] They also assert that behavior in both the self and other people can be modified by manipulating these sense-based subjective representations.[36]: 89–93 [36]: 93–95 [24]: 240–50 [16]: 5–78 [36]: 39–40 [2]: 7 

NLP is predicated on the notion that consciousness is bifurcated into a conscious component and an unconscious component. Those subjective representations that occur outside of an individual's awareness comprise what is referred to as the "unconscious mind".[2]: 77–80 

NLP utilizes an imitative method of learning—termed modeling—that is claimed to be able to codify and reproduce an exemplar's expertise in any domain of activity. Bandler and Grinder claim that learning may be codified through a process by which an individual attempts to mentally create a description of the sequence of the sensory and linguistic representations of the subjective experience of the exemplar during execution of the expertise.[16]: 7,9,10,36,123 [7]: 6 [2]: 35, 78 [37]

Techniques or set of practices
Further information: Methods of neuro-linguistic programming

An "eye accessing cue chart" as it appears as an example in Bandler & Grinder's Frogs into Princes (1979). The six directions represent "visual construct", "visual recall", "auditory construct", "auditory recall", "kinesthetic" and "auditory internal dialogue".
According to one study by Steinbach,[38] a classic interaction in NLP can be understood in terms of several major stages including establishing rapport, gleaning information about a problem mental state and desired goals, using specific tools and techniques to make interventions, and integrating proposed changes into the client's life. The entire process is guided by the non-verbal responses of the client.[38] The first is the act of establishing and maintaining rapport between the practitioner and the client which is achieved through pacing and leading the verbal (e.g., sensory predicates[further explanation needed] and keywords) and non-verbal behavior (e.g., matching and mirroring non-verbal behavior, or responding to eye movements) of the client.[16]: 8, 15, 24, 30, 45, 52, 149 

Once rapport is established, the practitioner may gather information about the client's present state as well as help the client define a desired state or goal for the interaction. The practitioner pays attention to the verbal and non-verbal responses as the client defines the present state and desired state and any resources that may be required to bridge the gap.[38] The client is typically encouraged to consider the consequences of the desired outcome, and how they may affect his or her personal or professional life and relationships, taking into account any positive intentions of any problems that may arise.[38] The practitioner thereafter assists the client in achieving the desired outcomes by using certain tools and techniques to change internal representations and responses to stimuli in the world.[39][40] Finally, the practitioner helps the client to mentally rehearse and integrate the changes into his or her life.[38] For example, the client may be asked to envision what it is like having already achieved the outcome.

According to Stollznow, "NLP also involves fringe discourse analysis and 'practical' guidelines for 'improved' communication. For example, one text asserts 'when you adopt the "but" word, people will remember what you said afterwards. With the "and" word, people remember what you said before and after.'"[17]

Applications
Alternative medicine
NLP has been promoted with claims it can be used to treat a variety of diseases including Parkinson's disease, HIV/AIDS and cancer.[41] Such claims have no supporting medical evidence.[41] People who use NLP as a form of treatment risk serious adverse health consequences as it can delay the provision of effective medical care.[41]

Psychotherapeutic
Early books about NLP had a psychotherapeutic focus given that the early models were psychotherapists. As an approach to psychotherapy, NLP shares similar core assumptions and foundations in common with some contemporary brief and systemic practices,[42][43][44] such as solution focused brief therapy.[45][46] NLP has also been acknowledged as having influenced these practices[44][47] with its reframing techniques[48][49] which seeks to achieve behavior change by shifting its context or meaning,[50] for example, by finding the positive connotation of a thought or behavior.

The two main therapeutic uses of NLP are, firstly, as an adjunct by therapists[51] practicing in other therapeutic disciplines and, secondly, as a specific therapy called Neurolinguistic Psychotherapy.[52]

According to Stollznow, "Bandler and Grinder's infamous Frogs into Princes and their other books boast that NLP is a cure-all that treats a broad range of physical and mental conditions and learning difficulties, including epilepsy, myopia and dyslexia. With its promises to cure schizophrenia, depression and Post Traumatic Stress Disorder, and its dismissal of psychiatric illnesses as psychosomatic, NLP shares similarities with Scientology and the Citizens Commission on Human Rights (CCHR)."[17] A systematic review of experimental studies by Sturt et al (2012) concluded that "there is little evidence that NLP interventions improve health-related outcomes."[53] In his review of NLP, Stephen Briers writes, "NLP is not really a cohesive therapy but a ragbag of different techniques without a particularly clear theoretical basis ... [and its] evidence base is virtually non-existent."[54] Eisner writes, "NLP appears to be a superficial and gimmicky approach to dealing with mental health problems. Unfortunately, NLP appears to be the first in a long line of mass marketing seminars that purport to virtually cure any mental disorder ... it appears that NLP has no empirical or scientific support as to the underlying tenets of its theory or clinical effectiveness. What remains is a mass-marketed serving of psychopablum."[55]

André Muller Weitzenhoffer—a friend and peer of Milton Erickson—wrote, "Has NLP really abstracted and explicated the essence of successful therapy and provided everyone with the means to be another Whittaker, Virginia Satir, or Erickson? ... [NLP's] failure to do this is evident because today there is no multitude of their equals, not even another Whittaker, Virginia Satir, or Erickson. Ten years should have been sufficient time for this to happen. In this light, I cannot take NLP seriously ... [NLP's] contributions to our understanding and use of Ericksonian techniques are equally dubious. Patterns I and II are poorly written works that were an overambitious, pretentious effort to reduce hypnotism to a magic of words."[26]: 305 

Clinical psychologist Stephen Briers questions the value of the NLP maxim—a presupposition in NLP jargon—"there is no failure, only feedback".[56] Briers argues that the denial of the existence of failure diminishes its instructive value. He offers Walt Disney, Isaac Newton and J.K. Rowling as three examples of unambiguous acknowledged personal failure that served as an impetus to great success. According to Briers, it was "the crash-and-burn type of failure, not the sanitised NLP Failure Lite, i.e. the failure-that-isn't really-failure sort of failure" that propelled these individuals to success. Briers contends that adherence to the maxim leads to self-deprecation. According to Briers, personal endeavour is a product of invested values and aspirations and the dismissal of personally significant failure as mere feedback effectively denigrates what one values. Briers writes, "Sometimes we need to accept and mourn the death of our dreams, not just casually dismiss them as inconsequential." Briers also contends that the NLP maxim is narcissistic, self-centered and divorced from notions of moral responsibility.[57]

Other uses
Although the original core techniques of NLP were therapeutic in orientation their generic nature enabled them to be applied to other fields. These applications include persuasion,[33] sales,[58] negotiation,[59] management training,[60] sports,[61] teaching, coaching, team building, public speaking, and in the process of hiring employees.[62]

Scientific criticism
In the early 1980s, NLP was advertised as an important advance in psychotherapy and counseling, and attracted some interest in counseling research and clinical psychology. However, as controlled trials failed to show any benefit from NLP and its advocates made increasingly dubious claims, scientific interest in NLP faded.[63][64]

Numerous literature reviews and meta-analyses have failed to show evidence for NLP's assumptions or effectiveness as a therapeutic method.[b] While some NLP practitioners have argued that the lack of empirical support is due to insufficient research which tests NLP,[c] the consensus scientific opinion is that NLP is pseudoscience[d][e] and that attempts to dismiss the research findings based on these arguments "[constitute]s an admission that NLP does not have an evidence base and that NLP practitioners are seeking a post-hoc credibility."[81][82]

Surveys in the academic community have shown NLP to be widely discredited among scientists.[f] Among the reasons for considering NLP a pseudoscience are that evidence in favor of it is limited to anecdotes and personal testimony,[22][86] that it is not informed by scientific understanding of neuroscience and linguistics,[22][87] and that the name "neuro-linguistic programming" uses jargon words to impress readers and obfuscate ideas, whereas NLP itself does not relate any phenomena to neural structures and has nothing in common with linguistics or programming.[13][88][89][71][g] In fact, in education, NLP has been used as a key example of pseudoscience.[77][78][79]

As a quasi-religion
Sociologists and anthropologists—amongst others—have categorized NLP as a quasi-religion belonging to the New Age and/or Human Potential Movements.[91][92][93][94][95][96][97][98][99][100] Medical anthropologist Jean M. Langford categorizes NLP as a form of folk magic; that is to say, a practice with symbolic efficacy—as opposed to physical efficacy—that is able to effect change through nonspecific effects (e.g., placebo). To Langford, NLP is akin to a syncretic folk religion "that attempts to wed the magic of folk practice to the science of professional medicine".[101] Bandler and Grinder were and continue to be[102][103]) influenced by the shamanism described in the books of Carlos Castaneda. Several ideas and techniques have been borrowed from Castaneda and incorporated into NLP including so-called "double induction"[19]: 41  and the notion of "stopping the world"[104] which is central to NLP modeling. Tye (1994)[86] characterizes NLP as a type of "psycho shamanism". Fanthorpe and Fanthorpe (2008)[105] see a similarity between the mimetic procedure and intent of NLP modeling and aspects of ritual in some syncretic religions. Hunt (2003)[91] draws a comparison between the concern with lineage from an NLP guru—which is evident amongst some NLP proponents—and the concern with guru lineage in some Eastern religions.

In Aupers and Houtman,[95] Bovbjerg identifies NLP as a New Age "psycho-religion" and uses NLP as a case-study to demonstrate the thesis that the New Age psycho-religions such as NLP are predicated on an intrinsically religious idea, namely concern with a transcendent "other". In the world's monotheistic faiths, argues Bovbjerg, the purpose of religious practice is communion and fellowship with a transcendent "other", i.e. a God. With the New Age psycho-religions, argues Bovbjerg, this orientation towards a transcendent "other" persists, but the "other" has become "the other in ourselves", the so-called "unconscious": "The individual's inner life becomes the intangible focus of [psycho-]religious practices and the subconscious becomes a constituent part of modern individuals' understanding of the Self."[106] Bovbjerg adds, "Courses in personal development would make no sense without an unconscious that contains hidden resources and hidden knowledge of the self."[citation needed] Thus psycho-religious practice revolves around ideas of the conscious and unconscious self and communicating with and accessing the hidden resources of the unconscious self—the transcendent "other". According to Bovbjerg, the notion that we have an unconscious self underlies many NLP techniques either explicitly or implicitly. Bovbjerg argues, "Through particular practices, the [NLP practitioner qua] psycho-religious practitioner expects to achieve self-perfection in a never-ending transformation of the self."[citation needed]

Bovbjerg's secular critique of NLP is echoed in the conservative Christian perspective of the New Age as represented by David Jeremiah who argues, "The 'transformation' recommended by the founders and leaders of these business seminars [such as NLP] has spiritual implications that a non-Christian or new believer may not recognise. The belief that human beings can change themselves by calling upon the power (or god) within or their own infinite human potential is a contradiction of the Christian view. The Bible says man is a sinner and is saved by God's grace alone."[107]

Intellectual property disputes
By the end of 1980, the collaboration between Bandler and Grinder ended.[20] On 25 September 1981, Bandler instituted a civil action against Grinder and his company, seeking injunctive relief and damages for Grinder's commercial activity in relation to NLP. On 29 October 1981, judgement was made in favor of Bandler.[108] As part of a settlement agreement Bandler granted to Grinder a limited 10-year license to conduct NLP seminars, offer certification in NLP and use the NLP name on the condition that royalties from the earnings of the seminars be paid to Bandler. In July 1996 and January 1997, Bandler instituted a further two civil actions against Grinder and his company, numerous other prominent figures in NLP and 200 further initially unnamed persons. Bandler alleged that Grinder had violated the terms of the settlement agreement reached in the initial case and had suffered commercial damage as a result of the allegedly illegal commercial activities of the defendants. Bandler sought from each defendant damages no less than US$10,000,000.00.[109][110] In February 2000, the Court found against Bandler, stating that "Bandler has misrepresented to the public, through his licensing agreement and promotional materials, that he is the exclusive owner of all intellectual property rights associated with NLP, and maintains the exclusive authority to determine membership in and certification in the Society of NLP."[111][112]

On this matter Stollznow[17] commented in 2010, "ironically, Bandler and Grinder feuded in the 1980s over trademark and theory disputes. Tellingly, none of their myriad of NLP models, pillars, and principles helped these founders to resolve their personal and professional conflicts."

In December 1997, Tony Clarkson instituted civil proceedings against Bandler to have Bandler's UK trademark of NLP revoked. The Court found in favor of Clarkson; Bandler's trademark was subsequently revoked.[113][114]

By the end of 2000, Bandler and Grinder entered a release where they agreed, amongst other things, that "they are the co-creators and co-founders of the technology of Neuro-linguistic Programming" and "mutually agree to refrain from disparaging each other's efforts, in any fashion, concerning their respective involvement in the field of Neurolinguistic Programming."[115]

As a consequence of these disputes and settlements, the names NLP and Neuro-linguistic Programming are not owned by any party and there is no restriction on any party offering NLP certification.[116][117][118][119][120]

Associations, certification, and practitioner standards
The names NLP and Neuro-linguistic Programming are not owned by any person or organisation, they are not trademarked intellectual property[121][122] and there is no central regulating authority for NLP instruction and certification.[119][120] There is no restriction on who can describe themselves as an NLP Master Practitioner or NLP Master Trainer and there are a multitude of certifying associations;[81] this has led Devilly (2005) to describe such training and certifying associations as granfalloons, i.e. proud and meaningless associations of human beings.[63]

There is great variation in the depth and breadth of training and standards of practitioners, and some disagreement between those in the field about which patterns are, or are not, actual NLP.[12][123] NLP is an open field of training with no "official" best practice. With different authors, individual trainers and practitioners having developed their own methods, concepts and labels, often branding them as NLP,[30] the training standards and quality differ greatly.[124] In 2009, a British television presenter was able to register his pet cat as a member of the British Board of Neuro Linguistic Programming (BBNLP), which subsequently claimed that it existed only to provide benefits to its members and not to certify credentials.[125]`,
		5,
		false
	);

	return (
		<>
			<h1>{output}</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
