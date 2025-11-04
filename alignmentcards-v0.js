 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }, 
    {
    "code": "AT",
    "name": "Alignment Traits",
    "pathology": "Failures of alignment often stem from missing or underdeveloped traits such as honesty, empathy, or accountability that maintain trust, transparency, and shared purpose across systems of intelligence.",
    "color": "#E6F7FF",
    "description": "Alignment Traits capture enduring dispositions—like honesty, empathy, accountability, humility, and curiosity—that make both humans and machines reliably act in ways that respect others’ values and goals. Each trait functions as a stabilizer that prevents misalignment through self-correction and relational awareness."
  }
];


 export const cards = [

  {
    "category": "AP",
    "name": "Transparency",
    "definition": "Actions, decisions, and processes are open, understandable, and accessible to others.",
    "human": "A transparent person communicates motives and reasoning clearly.",
    "organizational": "Transparent organizations disclose operations, policies, and outcomes to build trust.",
    "professional": "Experts maintain clear documentation and share methodologies openly.",
    "machine": "AI systems explain their reasoning and make internal logic interpretable to users.",
    "failureModes": {
      "human": "People hide motives or mislead others, eroding trust.",
      "organizational": "The company withholds information, causing confusion or public distrust.",
      "professional": "Experts obscure their methods, making results unverifiable or unethical.",
      "machine": "The AI operates as a “black box,” producing unexplained or biased outcomes."
    }
    },
  {
    "category": "AP",
    "name": "Accountability",
    "definition": "Accountability is the obligation to take responsibility for one’s actions and their consequences.",
    "human": "Individuals acknowledge mistakes and take ownership for their actions and effects.",
    "organizational": "Institutions establish clear roles, reporting lines, and mechanisms for assigning responsibility.",
    "professional": "Practitioners accept ethical and legal liability for the design and deployment of their work.",
    "machine": "AI systems are traceable, with outcomes linked to human decisions and design choices.",
    "failureModes": {
      "human": "People deny responsibility and shift blame to others when mistakes occur.",
      "organizational": "No one is held accountable for system failures, leading to repeated errors.",
      "professional": "Engineers avoid liability for harmful impacts, eroding professional credibility.",
      "machine": "AI actions cannot be traced to any human input, creating an accountability gap."
      }
    },
    {
      "category": "AP",
      "name": "Privacy",
      "definition": "Privacy is the right to control access to personal information and maintain one’s autonomy.",
      "human": "People safeguard their personal boundaries and respect the confidentiality of others.",
      "organizational": "Companies implement data protection measures and restrict unnecessary information sharing.",
      "professional": "Experts ensure sensitive information is securely handled and anonymized when possible.",
      "machine": "AI systems limit data collection and protect user information through secure design.",
      "failureModes": {
        "human": "Someone exposes another’s private information without consent.",
        "organizational": "A company leaks or sells user data without permission, violating trust.",
        "professional": "An engineer overlooks encryption or privacy safeguards, causing data breaches.",
        "machine": "AI models unintentionally reveal personal details or infer private traits."
      }
    },
    {
      "category": "AP",
      "name": "Fairness",
      "definition": "Fairness means treating all individuals and groups impartially and ensuring equal opportunity and justice.",
      "human": "Individuals act without favoritism, recognizing and countering personal bias.",
      "organizational": "Institutions design inclusive policies and monitor systems for equitable outcomes.",
      "professional": "Engineers and researchers evaluate datasets and models to mitigate bias.",
      "machine": "AI systems are trained to avoid discrimination and ensure balanced performance across groups.",
      "failureModes": {
        "human": "People let stereotypes or favoritism influence their decisions.",
        "organizational": "Algorithms or policies systematically disadvantage certain populations.",
        "professional": "Designers ignore bias in data, resulting in unfair treatment.",
        "machine": "The AI amplifies existing social bias or consistently misclassifies certain groups."
      }
    },
    {
      "category": "AP",
      "name": "Safety and Reliability",
      "definition": "Safety and reliability refer to the ability of systems or actions to function predictably without causing harm.",
      "human": "People act carefully, check their work, and avoid reckless or harmful behavior.",
      "organizational": "Organizations establish rigorous testing, safety standards, and contingency planning.",
      "professional": "Engineers verify systems under varied conditions to ensure dependable operation.",
      "machine": "AI systems include monitoring, fail-safes, and robustness against unexpected inputs.",
      "failureModes": {
        "human": "Negligence or fatigue leads to errors that cause injury or harm.",
        "organizational": "A company releases untested systems, resulting in safety incidents or accidents.",
        "professional": "Engineers deploy unverified code that fails under real-world conditions.",
        "machine": "The AI malfunctions, misinterprets data, or behaves unpredictably in critical situations."
      }
    },
    {
      "category": "AP",
      "name": "Human Oversight",
      "definition": "Human oversight ensures that human judgment and ethical reasoning remain central in decision-making.",
      "human": "People stay attentive and intervene when automation or routine decisions conflict with moral sense.",
      "organizational": "Institutions require human review and authorization for significant automated decisions.",
      "professional": "Experts design systems that allow for monitoring, correction, and override by human operators.",
      "machine": "AI systems are built to defer to human authority during uncertainty or moral ambiguity.",
      "failureModes": {
        "human": "Individuals over-rely on automation and fail to notice critical errors.",
        "organizational": "The organization deploys fully autonomous systems with no human supervision.",
        "professional": "Designers exclude human control in high-risk environments, leading to ethical lapses.",
        "machine": "The AI ignores or overrides human input, resulting in autonomous errors or harm."
      }
    },
    {
    "category": "AB",
    "name": "Teamwork vs Individual Achievement",
    "definition": "Organizations often claim to value collaboration but reward individual success metrics, undermining teamwork.",
    "human": "People focus on outperforming peers instead of cooperating, fostering competition over cooperation.",
    "organizational": "The company promotes teamwork yet offers bonuses for personal achievements, weakening collective goals.",
    "professional": "Managers evaluate employees on personal metrics rather than group performance, discouraging shared problem-solving.",
    "machine": "AI systems optimize for individual productivity data instead of team collaboration outcomes.",
    "failureModes": {
      "human": "Individuals hoard information to gain advantage over peers.",
      "organizational": "Departments compete for credit instead of coordinating toward shared results.",
      "professional": "Engineers avoid collaborative debugging or documentation to focus on individual deliverables.",
      "machine": "AI-driven performance systems overvalue solo output, reducing cooperation within teams."
    }
  },
  {
    "category": "AB",
    "name": "Innovation vs Risk Aversion",
    "definition": "Organizations praise innovation but punish failure, creating a culture that avoids risk-taking.",
    "human": "People hide mistakes or avoid bold ideas to protect their reputation.",
    "organizational": "The system claims to reward creativity but penalizes projects that fail, fostering conformity.",
    "professional": "Researchers pursue safe, incremental studies instead of breakthrough innovations.",
    "machine": "AI models are trained to minimize error, discouraging exploration or novel solutions.",
    "failureModes": {
      "human": "Employees play it safe to avoid blame for failed experiments.",
      "organizational": "Leadership rejects unproven ideas, reinforcing a conservative status quo.",
      "professional": "Designers copy existing models to avoid project rejection.",
      "machine": "The AI’s objective function overemphasizes error minimization, reducing creative discovery."
    }
  },
  {
    "category": "AB",
    "name": "Ethical Leadership vs Short-Term Results",
    "definition": "Leaders claim to value ethics and integrity but reward short-term performance and profits instead.",
    "human": "Managers prioritize quarterly targets over fair or honest practices.",
    "organizational": "Corporate incentives tie bonuses to immediate financial outcomes rather than ethical impact.",
    "professional": "Professionals overlook safety or compliance to meet deadlines or quotas.",
    "machine": "AI systems are optimized for efficiency or profit without constraints for fairness or long-term consequences.",
    "failureModes": {
      "human": "Individuals compromise ethics to achieve visible success.",
      "organizational": "Companies reward rule-bending behavior that boosts short-term metrics.",
      "professional": "Engineers skip ethical review steps to deliver on time.",
      "machine": "AI algorithms maximize engagement or revenue at the cost of user well-being or misinformation."
    }
  },
  {
    "category": "AT",
    "name": "Honesty",
    "definition": "Commitment to truth-telling and transparency even when inconvenient.",
    "people": "In humans, honesty underpins interpersonal trust—allowing people to coordinate, share feedback, and self-correct without manipulation.",
    "peopleref": "none",
    "organizational": "Organizations practice honesty through transparent reporting, ethical communication, and accurate representation of outcomes.",
    "organizationalref": "none",
    "professionals": "Professional honesty appears in research integrity, accurate data representation, and the refusal to fabricate or exaggerate claims.",
    "professionalref": "none",
    "machine": "For AI systems, honesty corresponds to faithful model outputs and interpretability—models that do not hallucinate or conceal uncertainty.",
    "machineref": "none",
    "failureModes": {
      "human": "Deception leads to loss of trust, fractured relationships, and ethical violations.",
      "organizational": "Data manipulation or false reporting undermines credibility and legal compliance.",
      "experts": "Fabricated findings or overconfidence misguides decision-making.",
      "machine": "Hallucinations, bias masking, or lack of model transparency erode reliability."
    },
    "expand": {
      "human": "Honesty supports moral agency—allowing individuals to align words and actions with shared truths.",
      "organizational": "Transparent organizations earn long-term trust from employees, investors, and the public.",
      "experts": "Professional honesty ensures knowledge systems stay self-correcting through replication and peer review.",
      "machine": "Machine honesty requires interpretability frameworks, verifiable reasoning traces, and calibrated confidence levels."
    }
  },
  {
    "category": "AT",
    "name": "Empathy",
    "definition": "The ability to understand and share the feelings or perspectives of others.",
    "people": "Humans use empathy to align emotional understanding with others’ well-being, enabling moral concern.",
    "organizational": "Organizations demonstrate empathy through user-centered design, inclusive culture, and social responsibility policies.",
    "professionals": "Professionals apply empathy to improve client relations and workplace collaboration.",
    "machine": "Machine empathy involves affective computing or modeling human affect to adapt communication styles appropriately.",
    "failureModes": {
      "human": "Without empathy, interactions become exploitative or insensitive.",
      "organizational": "Products or policies neglect stakeholder needs, leading to disengagement or harm.",
      "experts": "Experts may ignore lived experiences or user contexts.",
      "machine": "Robots or AI systems misread emotions, respond insensitively, or amplify distress."
    },
    "expand": {
      "human": "Empathy acts as an alignment mechanism by integrating emotional awareness into decision-making.",
      "organizational": "Empathetic design improves system adoption and satisfaction.",
      "experts": "Professional empathy ensures interdisciplinary respect and ethical foresight.",
      "machine": "Empathetic AI models support better human–machine interaction and trust calibration."
    }
  },
  {
    "category": "AT",
    "name": "Accountability",
    "definition": "Willingness to be held responsible for one’s actions and their impacts.",
    "people": "Individuals align with collective values by accepting responsibility and learning from mistakes.",
    "organizational": "Institutions use audits, feedback systems, and oversight bodies to maintain accountability.",
    "professionals": "Accountability appears in codes of conduct and peer review processes.",
    "machine": "AI accountability includes traceability, audit logs, and explainability of decisions.",
    "failureModes": {
      "human": "Denial and blame-shifting block moral growth.",
      "organizational": "Unaccountable systems lead to corruption and ethical drift.",
      "experts": "Without review, expertise turns into authority without justification.",
      "machine": "Opaque algorithms make error correction or liability impossible."
    },
    "expand": {
      "human": "Accountability transforms mistakes into learning events.",
      "organizational": "Accountable organizations evolve with stakeholder trust.",
      "experts": "Peer accountability enforces scientific rigor.",
      "machine": "AI accountability builds governance frameworks for responsible deployment."
    }
  }

]
