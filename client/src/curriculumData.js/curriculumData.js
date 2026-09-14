export const HIGH_SCHOOL_CURRICULUM = {
  Grade_9: {
    Biology: {
      unitTitle: "Grade 9 Biology (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: INTRODUCTION TO BIOLOGY ====================
        { id: "G9B_U1_1", type: "lesson", title: "1.1 Definition of Biology" },
        { id: "G9B_U1_2", type: "lesson", title: "1.2 Why do we study Biology?" },
        { id: "G9B_U1_3", type: "lesson", title: "1.3 The Scientific Method" },
        { id: "G9B_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Scientific Foundations" },
        { id: "G9B_U1_4", type: "lesson", title: "1.4 Tools of a Biologist" },
        { id: "G9B_U1_5", type: "lesson", title: "1.5 The Light Microscope Mechanics" },
        { id: "G9B_U1_6", type: "lesson", title: "1.6 General Laboratory Safety Rules" },
        { id: "G9B_U1_Q2", type: "quiz", title: "⚡ Quiz 2: Microscopes & Lab Safety" },
        { id: "G9B_U1_REV", type: "test", title: "📝 Unit 1 Textbook Review Questions" },

        // ==================== UNIT 2: CHARACTERISTICS & CLASSIFICATION ====================
        { id: "G9B_U2_1", type: "lesson", title: "2.1 Characteristics of Living Things" },
        { id: "G9B_U2_2", type: "lesson", title: "2.2 Taxonomy of Living Things" },
        { id: "G9B_U2_3", type: "lesson", title: "2.3 Relevance of Classification" },
        { id: "G9B_U2_Q1", type: "quiz", title: "⚡ Quiz 3: Introduction to Taxonomy" },
        { id: "G9B_U2_4", type: "lesson", title: "2.4 Linnaean System of Nomenclature" },
        { id: "G9B_U2_5", type: "lesson", title: "2.5 Common Ethiopian Animals and Plants" },
        { id: "G9B_U2_6", type: "lesson", title: "2.6 The Five-Kingdom System of Classification" },
        { id: "G9B_U2_Q2", type: "quiz", title: "⚡ Quiz 4: Nomenclature & The Five Kingdoms" },
        { id: "G9B_U2_7", type: "lesson", title: "2.7 Renowned Taxonomists in Ethiopia" },
        { id: "G9B_U2_REV", type: "test", title: "📝 Unit 2 Textbook Review Questions" },

        // ==================== UNIT 3: CELLS ====================
        { id: "G9B_U3_1", type: "lesson", title: "3.1 Introduction to Cells" },
        { id: "G9B_U3_2", type: "lesson", title: "3.2 Cell Theory Fundamentals" },
        { id: "G9B_U3_3", type: "lesson", title: "3.3 Cell Structure and Function" },
        { id: "G9B_U3_Q1", type: "quiz", title: "⚡ Quiz 5: Cell Theory & Cell Structures" },
        { id: "G9B_U3_4", type: "lesson", title: "3.4 Types of Cells (Prokaryote vs Eukaryote)" },
        { id: "G9B_U3_5", type: "lesson", title: "3.5 Animal and Plant Cells Comparison" },
        { id: "G9B_U3_6", type: "lesson", title: "3.6 Observing Cells Under a Microscope" },
        { id: "G9B_U3_Q2", type: "quiz", title: "⚡ Quiz 6: Cell Types & Microscopy" },
        { id: "G9B_U3_7", type: "lesson", title: "3.7 The Cell and its Environment (Transport)" },
        { id: "G9B_U3_8", type: "lesson", title: "3.8 Levels of Biological Organization" },
        { id: "G9B_U3_Q3", type: "quiz", title: "⚡ Quiz 7: Membrane Transport & Organization" },
        { id: "G9B_U3_REV", type: "test", title: "📝 Unit 3 Textbook Review Questions" },

        // ==================== UNIT 4: REPRODUCTION ====================
        { id: "G9B_U4_1", type: "lesson", title: "4.1 Introduction to Reproduction" },
        { id: "G9B_U4_2", type: "lesson", title: "4.2 Asexual Reproduction Overview" },
        { id: "G9B_U4_3", type: "lesson", title: "4.3 Types of Asexual Reproduction" },
        { id: "G9B_U4_Q1", type: "quiz", title: "⚡ Quiz 8: Asexual Modes & Cycles" },
        { id: "G9B_U4_4", type: "lesson", title: "4.4 Sexual Reproduction in Humans" },
        { id: "G9B_U4_5", type: "lesson", title: "4.5 Primary and Secondary Sexual Characteristics" },
        { id: "G9B_U4_6", type: "lesson", title: "4.6 Male Reproductive Structures" },
        { id: "G9B_U4_Q2", type: "quiz", title: "⚡ Quiz 9: Human Anatomy & Characteristics" },
        { id: "G9B_U4_7", type: "lesson", title: "4.7 Female Reproductive Structures" },
        { id: "G9B_U4_8", type: "lesson", title: "4.8 The Menstrual Cycle" },
        { id: "G9B_U4_9", type: "lesson", title: "4.9 Fertilization and Pregnancy" },
        { id: "G9B_U4_Q3", type: "quiz", title: "⚡ Quiz 10: Cycles, Gestation & Fertilization" },
        { id: "G9B_U4_10", type: "lesson", title: "4.10 Methods of Birth Control" },
        { id: "G9B_U4_11", type: "lesson", title: "4.11 Sexually Transmitted Infections (STIs)" },
        { id: "G9B_U4_Q4", type: "quiz", title: "⚡ Quiz 11: Contraception & STIs Prevention" },
        { id: "G9B_U4_REV", type: "test", title: "📝 Unit 4 Textbook Review Questions" },

        // ==================== UNIT 5: HUMAN HEALTH, NUTRITION & DISEASE ====================
        { id: "G9B_U5_1", type: "lesson", title: "5.1 What is food?" },
        { id: "G9B_U5_2", type: "lesson", title: "5.2 Nutrition Concepts" },
        { id: "G9B_U5_3", type: "lesson", title: "5.3 Nutrients and Core Biochemistry" },
        { id: "G9B_U5_Q1", type: "quiz", title: "⚡ Quiz 12: Nutrition & Nutrients Classes" },
        { id: "G9B_U5_4", type: "lesson", title: "5.4 Balanced Diets Construction" },
        { id: "G9B_U5_5", type: "lesson", title: "5.5 Deficiency Diseases Models" },
        { id: "G9B_U5_6", type: "lesson", title: "5.6 Malnutrition Metrics" },
        { id: "G9B_U5_Q2", type: "quiz", title: "⚡ Quiz 13: Diets & Nutritional Deficiencies" },
        { id: "G9B_U5_7", type: "lesson", title: "5.7 Substance Abuse and System Impacts" },
        { id: "G9B_U5_8", type: "lesson", title: "5.8 Infectious and Non-infectious Diseases" },
        { id: "G9B_U5_9", type: "lesson", title: "5.9 Renowned Nutritionists in Ethiopia" },
        { id: "G9B_U5_Q3", type: "quiz", title: "⚡ Quiz 14: Pathology, Substance Abuse & Science" },
        { id: "G9B_U5_REV", type: "test", title: "📝 Unit 5 Textbook Review Questions" },

        // ==================== UNIT 6: ECOLOGY ====================
        { id: "G9B_U6_1", type: "lesson", title: "6.1 Ecology Introduction & Terms" },
        { id: "G9B_U6_2", type: "lesson", title: "6.2 Ecological Relationships Models" },
        { id: "G9B_U6_Q1", type: "quiz", title: "⚡ Quiz 15: Ecological Interactions" },
        { id: "G9B_U6_REV", type: "test", title: "📝 Unit 6 Textbook Review Questions" },

        { id: "G9B_UT", type: "test", title: "🏆 Grade 9 Comprehensive Biology National Exam" }
      ]
    },
    Mathematics: {
      unitTitle: "Grade 9 Mathematics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: FURTHER ON SETS ====================
        { id: "G9M_U1_1", type: "lesson", title: "1.1 Sets and Elements" },
        { id: "G9M_U1_2", type: "lesson", title: "1.2 Set Description" },
        { id: "G9M_U1_3", type: "lesson", title: "1.3 The Notion of Sets" },
        { id: "G9M_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Set Core Notions & Descriptions" },
        { id: "G9M_U1_4", type: "lesson", title: "1.4 Operations on Sets" },
        { id: "G9M_U1_5", type: "lesson", title: "1.5 Application of Sets" },
        { id: "G9M_U1_Q2", type: "quiz", title: "⚡ Quiz 2: Set Operations & Applications" },
        { id: "G9M_U1_REV", type: "test", title: "📝 Unit 1 Textbook Review Exercise" },

        // ==================== UNIT 2: THE NUMBER SYSTEM ====================
        { id: "G9M_U2_1", type: "lesson", title: "2.1 Revision on Natural Numbers and Integers" },
        { id: "G9M_U2_2", type: "lesson", title: "2.2 Rational Numbers" },
        { id: "G9M_U2_3", type: "lesson", title: "2.3 Irrational Numbers" },
        { id: "G9M_U2_Q1", type: "quiz", title: "⚡ Quiz 3: Rationals vs Irrationals" },
        { id: "G9M_U2_4", type: "lesson", title: "2.4 Real Numbers" },
        { id: "G9M_U2_5", type: "lesson", title: "2.5 Application of Number Systems" },
        { id: "G9M_U2_Q2", type: "quiz", title: "⚡ Quiz 4: Real Numbers Arithmetic" },
        { id: "G9M_U2_REV", type: "test", title: "📝 Unit 2 Textbook Review Exercise" },

        // ==================== UNIT 3: SOLVING EQUATIONS ====================
        { id: "G9M_U3_1", type: "lesson", title: "3.1 Revision on Linear Equation in One Variable" },
        { id: "G9M_U3_2", type: "lesson", title: "3.2 Systems of Linear Equations in Two Variables" },
        { id: "G9M_U3_3", type: "lesson", title: "3.3 Solving Non-linear Equations" },
        { id: "G9M_U3_Q1", type: "quiz", title: "⚡ Quiz 5: Linear Systems & Non-linear Functions" },
        { id: "G9M_U3_4", type: "lesson", title: "3.4 Applications of Equations" },
        { id: "G9M_U3_REV", type: "test", title: "📝 Unit 3 Textbook Review Exercise" },

        // ==================== UNIT 4: SOLVING INEQUALITIES ====================
        { id: "G9M_U4_1", type: "lesson", title: "4.1 Revision on Linear Inequalities in One Variable" },
        { id: "G9M_U4_2", type: "lesson", title: "4.2 Systems of Linear Inequalities in Two Variables" },
        { id: "G9M_U4_3", type: "lesson", title: "4.3 Inequalities Involving Absolute Value" },
        { id: "G9M_U4_Q1", type: "quiz", title: "⚡ Quiz 6: Systems & Absolute Value Inequalities" },
        { id: "G9M_U4_4", type: "lesson", title: "4.4 Quadratic Inequalities" },
        { id: "G9M_U4_5", type: "lesson", title: "4.5 Applications of Inequalities" },
        { id: "G9M_U4_Q2", type: "quiz", title: "⚡ Quiz 7: Quadratic Forms & Applications" },
        { id: "G9M_U4_REV", type: "test", title: "📝 Unit 4 Textbook Review Exercise" },

        // ==================== UNIT 5: INTRODUCTION TO TRIGONOMETRY ====================
        { id: "G9M_U5_1", type: "lesson", title: "5.1 Revision on Right-angled Triangles" },
        { id: "G9M_U5_2", type: "lesson", title: "5.2 Trigonometric Ratios" },
        { id: "G9M_U5_Q1", type: "quiz", title: "⚡ Quiz 8: Right Triangles & Sin/Cos/Tan Ratios" },
        { id: "G9M_U5_REV", type: "test", title: "📝 Unit 5 Textbook Review Exercise" },

        // ==================== UNIT 6: REGULAR POLYGONS ====================
        { id: "G9M_U6_1", type: "lesson", title: "6.1 Sum of Interior Angles of a Convex Polygon" },
        { id: "G9M_U6_2", type: "lesson", title: "6.2 Sum of Exterior Angles of a Convex Polygon" },
        { id: "G9M_U6_3", type: "lesson", title: "6.3 Measures of Each Interior Angle and Exterior Angle" },
        { id: "G9M_U6_Q1", type: "quiz", title: "⚡ Quiz 9: Convex Polygon Interior & Exterior Calculations" },
        { id: "G9M_U6_4", type: "lesson", title: "6.4 Properties of Regular Polygons" },
        { id: "G9M_U6_REV", type: "test", title: "📝 Unit 6 Textbook Review Exercise" },

        // ==================== UNIT 7: CONGRUENCY AND SIMILARITY ====================
        { id: "G9M_U7_1", type: "lesson", title: "7.1 Revision on Congruency of Triangles" },
        { id: "G9M_U7_2", type: "lesson", title: "7.2 Definition of Similar Figures" },
        { id: "G9M_U7_3", type: "lesson", title: "7.3 Theorems on Similar Plane Figures" },
        { id: "G9M_U7_Q1", type: "quiz", title: "⚡ Quiz 10: Congruency vs Basic Similarity" },
        { id: "G9M_U7_4", type: "lesson", title: "7.4 Ratio of Perimeters of Similar Plane Figures" },
        { id: "G9M_U7_5", type: "lesson", title: "7.5 Ratio of Areas of Similar Plane Figures" },
        { id: "G9M_U7_6", type: "lesson", title: "7.6 Construction of Similar Plane Figures" },
        { id: "G9M_U7_Q2", type: "quiz", title: "⚡ Quiz 11: Perimeter/Area Ratios & Construction" },
        { id: "G9M_U7_7", type: "lesson", title: "7.7 Applications of Similarities" },
        { id: "G9M_U7_REV", type: "test", title: "📝 Unit 7 Textbook Review Exercise" },

        // ==================== UNIT 8: VECTORS IN TWO DIMENSIONS ====================
        { id: "G9M_U8_1", type: "lesson", title: "8.1 Vector and Scalar Quantities" },
        { id: "G9M_U8_2", type: "lesson", title: "8.2 Representation of a Vector" },
        { id: "G9M_U8_3", type: "lesson", title: "8.3 Vectors Operations" },
        { id: "G9M_U8_Q1", type: "quiz", title: "⚡ Quiz 12: Components & Vector Arithmetic" },
        { id: "G9M_U8_4", type: "lesson", title: "8.4 Position Vector" },
        { id: "G9M_U8_5", type: "lesson", title: "8.5 Applications of Vectors in Two Dimensions" },
        { id: "G9M_U8_Q2", type: "quiz", title: "⚡ Quiz 13: Position Vectors & Coordinate Models" },
        { id: "G9M_U8_REV", type: "test", title: "📝 Unit 8 Textbook Review Exercise" },

        // ==================== UNIT 9: STATISTICS AND PROBABILITY ====================
        { id: "G9M_U9_1", type: "lesson", title: "9.1 Statistical Data" },
        { id: "G9M_U9_2", type: "lesson", title: "9.2 Probability" },
        { id: "G9M_U9_Q1", type: "quiz", title: "⚡ Quiz 14: Data Grouping & Event Probabilities" },
        { id: "G9M_U9_REV", type: "test", title: "📝 Unit 9 Textbook Review Exercise" },

        { id: "G9M_UT", type: "test", title: "🏆 Grade 9 Comprehensive Mathematics National Exam" }
      ]
    },
    Physics: {
      unitTitle: "Grade 9 Physics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: PHYSICS AND HUMAN SOCIETY ====================
        { id: "G9P_U1_1", type: "lesson", title: "1.1 Definition and Nature of Physics" },
        { id: "G9P_U1_2", type: "lesson", title: "1.2 Branches of Physics" },
        { id: "G9P_U1_3", type: "lesson", title: "1.3 Related Fields to Physics" },
        { id: "G9P_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Definition & Classical Branches" },
        { id: "G9P_U1_4", type: "lesson", title: "1.4 Historical Issues and Contributors" },
        { id: "G9P_U1_REV", type: "test", title: "📝 Unit 1 Textbook Review Exercise" },

        // ==================== UNIT 2: PHYSICAL QUANTITIES ====================
        { id: "G9P_U2_1", type: "lesson", title: "2.1 Scales, Standards, Units (prefixes)" },
        { id: "G9P_U2_2", type: "lesson", title: "2.2 Measurement and Safety" },
        { id: "G9P_U2_3", type: "lesson", title: "2.3 Classification of Physical Quantities" },
        { id: "G9P_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Scales, Standards & Safety Protocols" },
        { id: "G9P_U2_4", type: "lesson", title: "2.4 Unit conversion" },
        { id: "G9P_U2_REV", type: "test", title: "📝 Unit 2 Textbook Review Exercise" },

        // ==================== UNIT 3: MOTION IN A STRAIGHT LINE ====================
        { id: "G9P_U3_1", type: "lesson", title: "3.1 Position, Distance and Displacement" },
        { id: "G9P_U3_2", type: "lesson", title: "3.2 Average Speed and Instantaneous Speed" },
        { id: "G9P_U3_3", type: "lesson", title: "3.3 Average Velocity and Instantaneous Velocity" },
        { id: "G9P_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Distance, Speed vs Velocity Vector Components" },
        { id: "G9P_U3_4", type: "lesson", title: "3.4 Acceleration" },
        { id: "G9P_U3_5", type: "lesson", title: "3.5 Uniform Motion" },
        { id: "G9P_U3_6", type: "lesson", title: "3.6 Graphical Representation of Motion" },
        { id: "G9P_U3_Q2", type: "quiz", title: "⚡ Quiz 4: Acceleration & Velocity-Time Graphs" },
        { id: "G9P_U3_REV", type: "test", title: "📝 Unit 3 Textbook Review Exercise" },

        // ==================== UNIT 4: FORCE, WORK, ENERGY AND POWER ====================
        { id: "G9P_U4_1", type: "lesson", title: "4.1 The Concept of Force" },
        { id: "G9P_U4_2", type: "lesson", title: "4.2 Newton's Laws of Motion" },
        { id: "G9P_U4_3", type: "lesson", title: "4.3 Forces of Friction" },
        { id: "G9P_U4_Q1", type: "quiz", title: "⚡ Quiz 5: Forces Dynamics & Newton's Laws" },
        { id: "G9P_U4_4", type: "lesson", title: "4.4 The Concept of Work" },
        { id: "G9P_U4_5", type: "lesson", title: "4.5 Kinetic and Potential Energies" },
        { id: "G9P_U4_6", type: "lesson", title: "4.6 Power" },
        { id: "G9P_U4_Q2", type: "quiz", title: "⚡ Quiz 6: Work Calculation, Energies & Mechanical Power" },
        { id: "G9P_U4_REV", type: "test", title: "📝 Unit 4 Textbook Review Exercise" },

        // ==================== UNIT 5: SIMPLE MACHINES ====================
        { id: "G9P_U5_1", type: "lesson", title: "5.1 Simple Machines and their Purposes" },
        { id: "G9P_U5_2", type: "lesson", title: "5.2 Simple Machines at Home" },
        { id: "G9P_U5_3", type: "lesson", title: "5.3 Simple Machines at Work Place" },
        { id: "G9P_U5_Q1", type: "quiz", title: "⚡ Quiz 7: Everyday Simple Machines Application" },
        { id: "G9P_U5_4", type: "lesson", title: "5.4 Classification of Simple Machines" },
        { id: "G9P_U5_5", type: "lesson", title: "5.5 Mechanical Advantage, Velocity Ratio and Efficiency of Simple Machine" },
        { id: "G9P_U5_6", type: "lesson", title: "5.6 Designing Simple Machine" },
        { id: "G9P_U5_Q2", type: "quiz", title: "⚡ Quiz 8: Velocity Ratio, System Efficiency & Engineering Designs" },
        { id: "G9P_U5_REV", type: "test", title: "📝 Unit 5 Textbook Review Exercise" },

        // ==================== UNIT 6: MECHANICAL OSCILLATION AND SOUND WAVE ====================
        { id: "G9P_U6_1", type: "lesson", title: "6.1 Common Characteristics of Waves" },
        { id: "G9P_U6_2", type: "lesson", title: "6.2 String, Pendulum and Spring" },
        { id: "G9P_U6_3", type: "lesson", title: "6.3 Propagation of Waves and Energy Transmission" },
        { id: "G9P_U6_Q1", type: "quiz", title: "⚡ Quiz 9: Wave Profiles, Pendulums & Energy Transmission" },
        { id: "G9P_U6_4", type: "lesson", title: "6.4 Sound Waves" },
        { id: "G9P_U6_5", type: "lesson", title: "6.5 Superposition of Waves" },
        { id: "G9P_U6_6", type: "lesson", title: "6.6 Characteristics of Sound Waves" },
        { id: "G9P_U6_Q2", type: "quiz", title: "⚡ Quiz 10: Sound Frequencies & Superposition Mechanics" },
        { id: "G9P_U6_REV", type: "test", title: "📝 Unit 6 Textbook Review Exercise" },

        // ==================== UNIT 7: TEMPERATURE AND THERMOMETRY ====================
        { id: "G9P_U7_1", type: "lesson", title: "7.1 Temperature and Our Life" },
        { id: "G9P_U7_2", type: "lesson", title: "7.2 Extreme Temperature Safety" },
        { id: "G9P_U7_3", type: "lesson", title: "7.3 Temperature Change and its Effects" },
        { id: "G9P_U7_Q1", type: "quiz", title: "⚡ Quiz 11: Temperature Effects & Personal Safety" },
        { id: "G9P_U7_4", type: "lesson", title: "7.4 Measuring Temperature with Different Thermometric Scales" },
        { id: "G9P_U7_5", type: "lesson", title: "7.5 Types of Thermometers and Their Use" },
        { id: "G9P_U7_6", type: "lesson", title: "7.6 Conversion between Temperature Scales" },
        { id: "G9P_U7_Q2", type: "quiz", title: "⚡ Quiz 12: Scale Conversions & Thermometer Variants" },
        { id: "G9P_U7_7", type: "lesson", title: "7.7 Thermal Expansion of Materials" },
        { id: "G9P_U7_REV", type: "test", title: "📝 Unit 7 Textbook Review Exercise" },

        { id: "G9P_UT", type: "test", title: "🏆 Grade 9 Comprehensive Physics National Exam" }
      ]
    },
    Chemistry: {
      unitTitle: "Grade 9 Chemistry (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: CHEMISTRY AND ITS IMPORTANCE ====================
        { id: "G9C_U1_1", type: "lesson", title: "1.1 Definition and Scope of Chemistry" },
        { id: "G9C_U1_2", type: "lesson", title: "1.2 Relationship between Chemistry and Other Natural Sciences" },
        { id: "G9C_U1_3", type: "lesson", title: "1.3 The Role Chemistry Plays in Production and in the Society" },
        { id: "G9C_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Definition, Scope & Social Value" },
        { id: "G9C_U1_4", type: "lesson", title: "1.4 Some Common Chemical Industries in Ethiopia" },
        { id: "G9C_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: MEASUREMENTS AND SCIENTIFIC METHODS ====================
        { id: "G9C_U2_1", type: "lesson", title: "2.1 Measurements and Units in Chemistry" },
        { id: "G9C_U2_2", type: "lesson", title: "2.2 Chemistry as Experimental Science" },
        { id: "G9C_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Chemical Measurements & Lab Practice" },
        { id: "G9C_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: STRUCTURE OF THE ATOM ====================
        { id: "G9C_U3_1", type: "lesson", title: "3.1 Historical Development of the Atomic Theories of Matter" },
        { id: "G9C_U3_2", type: "lesson", title: "3.2 Fundamental Laws of Chemical Reactions" },
        { id: "G9C_U3_3", type: "lesson", title: "3.3 Atomic Theory" },
        { id: "G9C_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Atomic Theory History & Laws" },
        { id: "G9C_U3_4", type: "lesson", title: "3.4 Discoveries of Fundamental Subatomic Particles and the Atomic Nucleus" },
        { id: "G9C_U3_5", type: "lesson", title: "3.5 Composition of an Atom and the Isotopes" },
        { id: "G9C_U3_Q2", type: "quiz", title: "⚡ Quiz 4: Particles, Nucleus & Isotope Structures" },
        { id: "G9C_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: PERIODIC CLASSIFICATION OF ELEMENTS ====================
        { id: "G9C_U4_1", type: "lesson", title: "4.1 Historical Development of Periodic Classification of the Elements" },
        { id: "G9C_U4_2", type: "lesson", title: "4.2 Mendeleev's Classification of the Elements" },
        { id: "G9C_U4_3", type: "lesson", title: "4.3 The Modern Periodic Table" },
        { id: "G9C_U4_Q1", type: "quiz", title: "⚡ Quiz 5: Historical Paths & Mendeleev Table" },
        { id: "G9C_U4_4", type: "lesson", title: "4.4 The Major Trends in the Periodic Table" },
        { id: "G9C_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: CHEMICAL BONDING ====================
        { id: "G9C_U5_1", type: "lesson", title: "5.1 Chemical Bonding" },
        { id: "G9C_U5_2", type: "lesson", title: "5.2 Ionic Bonding" },
        { id: "G9C_U5_Q1", type: "quiz", title: "⚡ Quiz 6: Core Bonding Concepts & Ionic Bonds" },
        { id: "G9C_U5_3", type: "lesson", title: "5.3 Covalent Bonding" },
        { id: "G9C_U5_4", type: "lesson", title: "5.4 Metallic Bonding" },
        { id: "G9C_U5_Q2", type: "quiz", title: "⚡ Quiz 7: Covalent Sharing & Metallic Structures" },
        { id: "G9C_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        { id: "G9C_UT", type: "test", title: "🏆 Grade 9 Comprehensive Chemistry National Exam" }
      ]
    },
    English: {
      unitTitle: "Grade 9 English (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: LIVING IN URBAN AREAS ====================
        { id: "G9E_U1_1", type: "lesson", title: "1.1 Listening Skills" },
        { id: "G9E_U1_2", type: "lesson", title: "1.2 Reading Skills" },
        { id: "G9E_U1_3", type: "lesson", title: "1.3 Vocabulary Development" },
        { id: "G9E_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Urban Vocabulary & Comprehension" },
        { id: "G9E_U1_4", type: "lesson", title: "1.4 Grammar" },
        { id: "G9E_U1_5", type: "lesson", title: "1.5 Speaking Skills" },
        { id: "G9E_U1_6", type: "lesson", title: "1.6 Writing Skills" },
        { id: "G9E_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: STUDY SKILLS ====================
        { id: "G9E_U2_1", type: "lesson", title: "2.1 Listening Skills" },
        { id: "G9E_U2_2", type: "lesson", title: "2.2 Reading Skills" },
        { id: "G9E_U2_3", type: "lesson", title: "2.3 Vocabulary Development" },
        { id: "G9E_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Study Strategies & Terms" },
        { id: "G9E_U2_4", type: "lesson", title: "2.4 Grammar" },
        { id: "G9E_U2_5", type: "lesson", title: "2.5 Speaking Skills" },
        { id: "G9E_U2_6", type: "lesson", title: "2.6 Writing Skills" },
        { id: "G9E_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: TRAFFIC ACCIDENT ====================
        { id: "G9E_U3_1", type: "lesson", title: "3.1 Listening Skills" },
        { id: "G9E_U3_2", type: "lesson", title: "3.2 Reading Skills" },
        { id: "G9E_U3_3", type: "lesson", title: "3.3 Vocabulary Development" },
        { id: "G9E_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Safety Vocabulary & Grammar" },
        { id: "G9E_U3_4", type: "lesson", title: "3.4 Grammar" },
        { id: "G9E_U3_5", type: "lesson", title: "3.5 Speaking Skills" },
        { id: "G9E_U3_6", type: "lesson", title: "3.6 Writing Skills" },
        { id: "G9E_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: NATIONAL PARKS ====================
        { id: "G9E_U4_1", type: "lesson", title: "4.1 Listening Skills" },
        { id: "G9E_U4_2", type: "lesson", title: "4.2 Reading skills" },
        { id: "G9E_U4_3", type: "lesson", title: "4.3 Vocabulary Development" },
        { id: "G9E_U4_Q1", type: "quiz", title: "⚡ Quiz 4: Wildlife Literacy & Forms" },
        { id: "G9E_U4_4", type: "lesson", title: "4.4 Grammar" },
        { id: "G9E_U4_5", type: "lesson", title: "4.5 Speaking Skills" },
        { id: "G9E_U4_6", type: "lesson", title: "4.6 Writing Skills" },
        { id: "G9E_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: HORTICULTURE ====================
        { id: "G9E_U5_1", type: "lesson", title: "5.1 Listening skills" },
        { id: "G9E_U5_2", type: "lesson", title: "5.2 Reading Skills" },
        { id: "G9E_U5_3", type: "lesson", title: "5.3 Vocabulary Development" },
        { id: "G9E_U5_Q1", type: "quiz", title: "⚡ Quiz 5: Agricultural Terms & Speech" },
        { id: "G9E_U5_4", type: "lesson", title: "5.4 Grammar" },
        { id: "G9E_U5_5", type: "lesson", title: "5.5 Speaking Skills" },
        { id: "G9E_U5_6", type: "lesson", title: "5.6 Writing Skills" },
        { id: "G9E_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: POVERTY IN ETHIOPIA ====================
        { id: "G9E_U6_1", type: "lesson", title: "6.1 Listening skills" },
        { id: "G9E_U6_2", type: "lesson", title: "6.2 Reading Skills" },
        { id: "G9E_U6_3", type: "lesson", title: "6.3 Vocabulary Development" },
        { id: "G9E_U6_Q1", type: "quiz", title: "⚡ Quiz 6: Social Issues Context Reading" },
        { id: "G9E_U6_4", type: "lesson", title: "6.4 Grammar" },
        { id: "G9E_U6_5", type: "lesson", title: "6.5 Speaking Skills" },
        { id: "G9E_U6_6", type: "lesson", title: "6.6 Writing Skills" },
        { id: "G9E_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        // ==================== UNIT 7: COMMUNITY SERVICES ====================
        { id: "G9E_U7_1", type: "lesson", title: "7.1 Listening skills: Community Services" },
        { id: "G9E_U7_2", type: "lesson", title: "7.2 Reading Skills" },
        { id: "G9E_U7_3", type: "lesson", title: "7.3 Vocabulary Development" },
        { id: "G9E_U7_Q1", type: "quiz", title: "⚡ Quiz 7: Civic Vocabulary & Structure" },
        { id: "G9E_U7_4", type: "lesson", title: "7.4 Grammar" },
        { id: "G9E_U7_5", type: "lesson", title: "7.5 Speaking Skills" },
        { id: "G9E_U7_6", type: "lesson", title: "7.6 Writing Skills" },
        { id: "G9E_U7_REV", type: "test", title: "📝 Unit 7 Review Exercise" },

        // ==================== UNIT 8: COMMUNICABLE DISEASES ====================
        { id: "G9E_U8_1", type: "lesson", title: "8.1 Listening Skills" },
        { id: "G9E_U8_2", type: "lesson", title: "8.2 Reading Skills" },
        { id: "G9E_U8_3", type: "lesson", title: "8.3 Vocabulary Development" },
        { id: "G9E_U8_Q1", type: "quiz", title: "⚡ Quiz 8: Medical Passages & Verbs" },
        { id: "G9E_U8_4", type: "lesson", title: "8.4 Grammar" },
        { id: "G9E_U8_5", type: "lesson", title: "8.5 Speaking Skills" },
        { id: "G9E_U8_6", type: "lesson", title: "8.6 Writing Skills" },
        { id: "G9E_U8_REV", type: "test", title: "📝 Unit 8 Review Exercise" },

        // ==================== UNIT 9: FAIRNESS AND EQUITY ====================
        { id: "G9E_U9_1", type: "lesson", title: "9.1 Listening Skills" },
        { id: "G9E_U9_2", type: "lesson", title: "9.2 Reading Skills" },
        { id: "G9E_U9_3", type: "lesson", title: "9.3 Vocabulary Development" },
        { id: "G9E_U9_Q1", type: "quiz", title: "⚡ Quiz 9: Ethics Vocabulary & Expression" },
        { id: "G9E_U9_4", type: "lesson", title: "9.4 Grammar" },
        { id: "G9E_U9_5", type: "lesson", title: "9.5 Speaking Skills" },
        { id: "G9E_U9_6", type: "lesson", title: "9.6 Writing Skills" },
        { id: "G9E_U9_REV", type: "test", title: "📝 Unit 9 Review Exercise" },

        // ==================== UNIT 10: THE INTERNET ====================
        { id: "G9E_U10_1", type: "lesson", title: "10.1 Listening Skills" },
        { id: "G9E_U10_2", type: "lesson", title: "10.2 Reading Skills" },
        { id: "G9E_U10_3", type: "lesson", title: "10.3 Vocabulary Development" },
        { id: "G9E_U10_Q1", type: "quiz", title: "⚡ Quiz 10: Tech Literacy & Sentence Syntax" },
        { id: "G9E_U10_4", type: "lesson", title: "10.4 Grammar" },
        { id: "G9E_U10_5", type: "lesson", title: "10.5 Speaking Activity" },
        { id: "G9E_U10_6", type: "lesson", title: "10.6 Writing Activity" },
        { id: "G9E_U10_REV", type: "test", title: "📝 Unit 10 Review Exercise" },

        { id: "G9E_UT", type: "test", title: "🏆 Grade 9 Comprehensive English National Exam" }
      ]
    }
  },
  Grade_10: {
    Mathematics: {
      unitTitle: "Grade 10 Mathematics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: RELATIONS AND FUNCTIONS ====================
        { id: "G10M_U1_1", type: "lesson", title: "1.1 Relations" },
        { id: "G10M_U1_2", type: "lesson", title: "1.2 Functions" },
        { id: "G10M_U1_3", type: "lesson", title: "1.3 Applications of Relations and Functions" },
        { id: "G10M_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Relations, Functions & Applications" },
        { id: "G10M_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: POLYNOMIAL FUNCTIONS ====================
        { id: "G10M_U2_1", type: "lesson", title: "2.1 Definition of Polynomial Function" },
        { id: "G10M_U2_2", type: "lesson", title: "2.2 Operations on polynomial functions" },
        { id: "G10M_U2_3", type: "lesson", title: "2.3 Theorems on polynomial functions" },
        { id: "G10M_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Polynomial Operations & Theorems" },
        { id: "G10M_U2_4", type: "lesson", title: "2.4 Zeros of polynomial functions" },
        { id: "G10M_U2_5", type: "lesson", title: "2.5 Graphs of polynomial functions" },
        { id: "G10M_U2_6", type: "lesson", title: "2.6 Applications" },
        { id: "G10M_U2_Q2", type: "quiz", title: "⚡ Quiz 3: Zeros, Graphs & Applications" },
        { id: "G10M_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: EXPONENTIAL AND LOGARITHMIC FUNCTIONS ====================
        { id: "G10M_U3_1", type: "lesson", title: "3.1 Exponents and Logarithms" },
        { id: "G10M_U3_2", type: "lesson", title: "3.2 The Exponential Functions and Their Graphs" },
        { id: "G10M_U3_3", type: "lesson", title: "3.3 The Logarithmic Functions and Their Graphs" },
        { id: "G10M_U3_Q1", type: "quiz", title: "⚡ Quiz 4: Exponents, Logarithms & Curves" },
        { id: "G10M_U3_4", type: "lesson", title: "3.4 Solving Exponential and Logarithmic Equations" },
        { id: "G10M_U3_5", type: "lesson", title: "3.5 Relation between Exponential and Logarithmic functions" },
        { id: "G10M_U3_6", type: "lesson", title: "3.6 Applications" },
        { id: "G10M_U3_Q2", type: "quiz", title: "⚡ Quiz 5: Log Equations & Systems Applications" },
        { id: "G10M_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: TRIGONOMETRIC FUNCTIONS ====================
        { id: "G10M_U4_1", type: "lesson", title: "4.1 Radian Measure of angle" },
        { id: "G10M_U4_2", type: "lesson", title: "4.2 Basic Trigonometric Function" },
        { id: "G10M_U4_3", type: "lesson", title: "4.3 Trigonometric Identities & Equation" },
        { id: "G10M_U4_Q1", type: "quiz", title: "⚡ Quiz 6: Radian Scales, Ratios & Identities" },
        { id: "G10M_U4_4", type: "lesson", title: "4.4 Application" },
        { id: "G10M_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: CIRCLES ====================
        { id: "G10M_U5_1", type: "lesson", title: "5.1 Symmetrical properties of circles" },
        { id: "G10M_U5_2", type: "lesson", title: "5.2 Angle properties of circles" },
        { id: "G10M_U5_3", type: "lesson", title: "5.3 Arc length, perimeters and areas of segments and sectors" },
        { id: "G10M_U5_Q1", type: "quiz", title: "⚡ Quiz 7: Circle Symmetry, Angles & Arcs" },
        { id: "G10M_U5_4", type: "lesson", title: "5.4 Theorems on angles and arcs determined by lines intersecting inside, on and outside a circle" },
        { id: "G10M_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: SOLID FIGURES ====================
        { id: "G10M_U6_1", type: "lesson", title: "6.1 Revision of Cylinders and Prisms" },
        { id: "G10M_U6_2", type: "lesson", title: "6.2 Pyramids, cones and Spheres" },
        { id: "G10M_U6_3", type: "lesson", title: "6.3 Frustum of pyramids and cones" },
        { id: "G10M_U6_Q1", type: "quiz", title: "⚡ Quiz 8: Solids Surface Areas & Frustums" },
        { id: "G10M_U6_4", type: "lesson", title: "6.4 Surface areas and volumes of compound solids" },
        { id: "G10M_U6_5", type: "lesson", title: "6.5 Applications" },
        { id: "G10M_U6_Q2", type: "quiz", title: "⚡ Quiz 9: Compound Volumes & Applications" },
        { id: "G10M_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        // ==================== UNIT 7: COORDINATE GEOMETRY ====================
        { id: "G10M_U7_1", type: "lesson", title: "7.1 Distance between two points" },
        { id: "G10M_U7_2", type: "lesson", title: "7.2 Division of a line segment" },
        { id: "G10M_U7_3", type: "lesson", title: "7.3 Equation of a line" },
        { id: "G10M_U7_Q1", type: "quiz", title: "⚡ Quiz 10: Distances, Segments & Line Formulations" },
        { id: "G10M_U7_4", type: "lesson", title: "7.4 Slopes of parallel and perpendicular lines" },
        { id: "G10M_U7_5", type: "lesson", title: "7.5 Equation of a Circle" },
        { id: "G10M_U7_6", type: "lesson", title: "7.6 Applications" },
        { id: "G10M_U7_Q2", type: "quiz", title: "⚡ Quiz 11: Slopes, Circle Equations & Applications" },
        { id: "G10M_U7_REV", type: "test", title: "📝 Unit 7 Review Exercise" },

        { id: "G10M_UT", type: "test", title: "🏆 Grade 10 Comprehensive Mathematics National Exam" }
      ]
    },
    Physics: {
      unitTitle: "Grade 10 Physics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: VECTOR QUANTITIES ====================
        { id: "G10P_U1_1", type: "lesson", title: "1.1 Scalars and Vectors" },
        { id: "G10P_U1_2", type: "lesson", title: "1.2 Vector representations" },
        { id: "G10P_U1_3", type: "lesson", title: "1.3 Vector addition and subtraction" },
        { id: "G10P_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Vector Basics & Additions" },
        { id: "G10P_U1_4", type: "lesson", title: "1.4 Graphical method of vector addition" },
        { id: "G10P_U1_5", type: "lesson", title: "1.5 Vector resolution" },
        { id: "G10P_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: UNIFORMLY ACCELERATED MOTION ====================
        { id: "G10P_U2_1", type: "lesson", title: "2.1 Position and Displacement" },
        { id: "G10P_U2_2", type: "lesson", title: "2.2 Average velocity and instantaneous velocity" },
        { id: "G10P_U2_3", type: "lesson", title: "2.3 Acceleration" },
        { id: "G10P_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Displacement, Velocity & Acceleration" },
        { id: "G10P_U2_4", type: "lesson", title: "2.4 Equations of motion with constant acceleration" },
        { id: "G10P_U2_5", type: "lesson", title: "2.5 Graphical representation of uniformly accelerated motion" },
        { id: "G10P_U2_6", type: "lesson", title: "2.6 Relative velocity in one dimension" },
        { id: "G10P_U2_Q2", type: "quiz", title: "⚡ Quiz 3: Motion Equations, Graphs & Relative Velocity" },
        { id: "G10P_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: ELASTICITY AND STATIC EQUILIBRIUM OF RIGID BODY ====================
        { id: "G10P_U3_1", type: "lesson", title: "3.1 Elasticity and plasticity" },
        { id: "G10P_U3_2", type: "lesson", title: "3.2 Density and specific gravity" },
        { id: "G10P_U3_3", type: "lesson", title: "3.3 Stress and Strain" },
        { id: "G10P_U3_Q1", type: "quiz", title: "⚡ Quiz 4: Elasticity, Density & Stress-Strain" },
        { id: "G10P_U3_4", type: "lesson", title: "3.4 The Young Modulus" },
        { id: "G10P_U3_5", type: "lesson", title: "3.5 Static equilibrium (First & Second Conditions)" },
        { id: "G10P_U3_Q2", type: "quiz", title: "⚡ Quiz 5: Young Modulus & Rigid Body Equilibrium" },
        { id: "G10P_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: STATIC AND CURRENT ELECTRICITY ====================
        { id: "G10P_U4_1", type: "lesson", title: "4.1 Charges in Nature" },
        { id: "G10P_U4_2", type: "lesson", title: "4.2 Methods of Changing a Body" },
        { id: "G10P_U4_3", type: "lesson", title: "4.3 The electroscope" },
        { id: "G10P_U4_Q1", type: "quiz", title: "⚡ Quiz 6: Static Charges & Electroscopes" },
        { id: "G10P_U4_4", type: "lesson", title: "4.4 Electrical Discharge" },
        { id: "G10P_U4_5", type: "lesson", title: "4.5 Coulomb's law of electrostatics" },
        { id: "G10P_U4_6", type: "lesson", title: "4.6 The electric field" },
        { id: "G10P_U4_Q2", type: "quiz", title: "⚡ Quiz 7: Coulomb's Law & Electric Fields" },
        { id: "G10P_U4_7", type: "lesson", title: "4.7 Electric circuits" },
        { id: "G10P_U4_8", type: "lesson", title: "4.8 Current, Voltage, and Ohm's Law" },
        { id: "G10P_U4_9", type: "lesson", title: "4.9 Combination of resistors in a circuit" },
        { id: "G10P_U4_Q3", type: "quiz", title: "⚡ Quiz 8: Circuit Basics, Ohm's Law & Resistors" },
        { id: "G10P_U4_10", type: "lesson", title: "4.10 Voltmeter and ammeter connection in a circuit" },
        { id: "G10P_U4_11", type: "lesson", title: "4.11 Electrical safety in general and local context" },
        { id: "G10P_U4_12", type: "lesson", title: "4.12 Electric projects" },
        { id: "G10P_U4_Q4", type: "quiz", title: "⚡ Quiz 9: Meters, Safety & Circuit Projects" },
        { id: "G10P_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: MAGNETISM ====================
        { id: "G10P_U5_1", type: "lesson", title: "5.1 Magnet" },
        { id: "G10P_U5_2", type: "lesson", title: "5.2 Magnetic Field" },
        { id: "G10P_U5_3", type: "lesson", title: "5.3 The Earth's magnetic field and the compass" },
        { id: "G10P_U5_Q1", type: "quiz", title: "⚡ Quiz 10: Magnets & Planetary Fields" },
        { id: "G10P_U5_4", type: "lesson", title: "5.4 Magnetic field of a current-carrying conductor" },
        { id: "G10P_U5_5", type: "lesson", title: "5.5 Magnetic force on a moving charge placed in a uniform magnetic field" },
        { id: "G10P_U5_6", type: "lesson", title: "5.6 Magnetic force on a current-carrying wire" },
        { id: "G10P_U5_Q2", type: "quiz", title: "⚡ Quiz 11: Conductors & Magnetic Forces" },
        { id: "G10P_U5_7", type: "lesson", title: "5.7 Magnetic force between two parallel current-carrying wires" },
        { id: "G10P_U5_8", type: "lesson", title: "5.8 Applications of magnetism" },
        { id: "G10P_U5_Q3", type: "quiz", title: "⚡ Quiz 12: Wire Attractions & Practical Magnetism" },
        { id: "G10P_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: ELECTROMAGNETIC WAVES AND GEOMETRICAL OPTICS ====================
        { id: "G10P_U6_1", type: "lesson", title: "6.1 Electromagnetic (EM) waves" },
        { id: "G10P_U6_2", type: "lesson", title: "6.2 EM Spectrum" },
        { id: "G10P_U6_3", type: "lesson", title: "6.3 Light as a wave" },
        { id: "G10P_U6_Q1", type: "quiz", title: "⚡ Quiz 13: EM Fields & Spectral Radiations" },
        { id: "G10P_U6_4", type: "lesson", title: "6.4 Laws of reflection & refraction" },
        { id: "G10P_U6_5", type: "lesson", title: "6.5 Mirrors and lenses" },
        { id: "G10P_U6_6", type: "lesson", title: "6.6 Human eye and optical instruments" },
        { id: "G10P_U6_Q2", type: "quiz", title: "⚡ Quiz 14: Ray Optics, Lenses & Instruments" },
        { id: "G10P_U6_7", type: "lesson", title: "6.7 Primary colors of light and human vision" },
        { id: "G10P_U6_8", type: "lesson", title: "6.8 Color addition of light" },
        { id: "G10P_U6_9", type: "lesson", title: "6.9 Color subtraction of light using filters" },
        { id: "G10P_U6_Q3", type: "quiz", title: "⚡ Quiz 15: Optics Chroma & Color Filters" },
        { id: "G10P_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        { id: "G10P_UT", type: "test", title: "🏆 Grade 10 Comprehensive Physics National Exam" }
      ]
    },
    Biology: {
      unitTitle: "Grade 10 Biology (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: SUB-FIELDS OF BIOLOGY ====================
        { id: "G10B_U1_1", type: "lesson", title: "1.1 Sub-fields of Biology" },
        { id: "G10B_U1_2", type: "lesson", title: "1.2 Pure and applied fields of biology" },
        { id: "G10B_U1_3", type: "lesson", title: "1.3 Major discoveries that revolutionized biology" },
        { id: "G10B_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Sub-fields & Core Biological Discoveries" },
        { id: "G10B_U1_4", type: "lesson", title: "1.4 The contributions of biological discoveries to society and the environment" },
        { id: "G10B_U1_5", type: "lesson", title: "1.5 Ethiopian biologists and their contributions" },
        { id: "G10B_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: PLANTS ====================
        { id: "G10B_U2_1", type: "lesson", title: "2.1 Characteristics of plants" },
        { id: "G10B_U2_2", type: "lesson", title: "2.2 Flowering and non-flowering plants" },
        { id: "G10B_U2_3", type: "lesson", title: "2.3 Structure and function of plant parts (Leaf, Stem, Root)" },
        { id: "G10B_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Plant Anatomy & Classifications" },
        { id: "G10B_U2_4", type: "lesson", title: "2.4 Reproduction in plants (Life cycles & Pollination)" },
        { id: "G10B_U2_5", type: "lesson", title: "2.5 Seeds" },
        { id: "G10B_U2_6", type: "lesson", title: "2.6 Seed dispersal and germination" },
        { id: "G10B_U2_Q2", type: "quiz", title: "⚡ Quiz 3: Plant Reproduction, Seeds & Germination" },
        { id: "G10B_U2_7", type: "lesson", title: "2.7 Photosynthesis (Apparatus, Light-absorbing, Mechanism)" },
        { id: "G10B_U2_8", type: "lesson", title: "2.8 Transport in plant (Systems & Mechanisms)" },
        { id: "G10B_U2_9", type: "lesson", title: "2.9 Response in plants" },
        { id: "G10B_U2_Q3", type: "quiz", title: "⚡ Quiz 4: Photosynthesis, Transport Systems & Tropisms" },
        { id: "G10B_U2_10", type: "lesson", title: "2.10 Medicinal plants" },
        { id: "G10B_U2_11", type: "lesson", title: "2.11 Renowned Ethiopian Botanist" },
        { id: "G10B_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: BIOCHEMICAL MOLECULES ====================
        { id: "G10B_U3_1", type: "lesson", title: "3.1.1 Inorganic molecule: Water" },
        { id: "G10B_U3_2", type: "lesson", title: "3.1.2 Inorganic ions" },
        { id: "G10B_U3_3", type: "lesson", title: "3.1.3 Organic molecules" },
        { id: "G10B_U3_Q1", type: "quiz", title: "⚡ Quiz 5: Water Properties, Ions & Organic Macromolecules" },
        { id: "G10B_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: CELL REPRODUCTION ====================
        { id: "G10B_U4_1", type: "lesson", title: "4.1 Cell cycle" },
        { id: "G10B_U4_2", type: "lesson", title: "4.2 The Cell division (Mitosis & Meiosis)" },
        { id: "G10B_U4_3", type: "lesson", title: "4.3 Renowned Ethiopian Geneticist" },
        { id: "G10B_U4_Q1", type: "quiz", title: "⚡ Quiz 6: Cell Cycle Phases, Mitosis vs Meiosis" },
        { id: "G10B_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: HUMAN BIOLOGY ====================
        { id: "G10B_U5_1", type: "lesson", title: "5.1 The Digestive System" },
        { id: "G10B_U5_2", type: "lesson", title: "5.2 The circulatory and lymphatic system (Blood & Diseases)" },
        { id: "G10B_U5_3", type: "lesson", title: "5.3 The breathing system" },
        { id: "G10B_U5_Q1", type: "quiz", title: "⚡ Quiz 7: Digestion, Circulation & Respiration Anatomy" },
        { id: "G10B_U5_4", type: "lesson", title: "5.4 The Human Urinary system" },
        { id: "G10B_U5_5", type: "lesson", title: "5.5 The immune system" },
        { id: "G10B_U5_6", type: "lesson", title: "5.6 Renowned Physicians in Ethiopia" },
        { id: "G10B_U5_Q2", type: "quiz", title: "⚡ Quiz 8: Excretory Networks, Immunity & Medicine Histories" },
        { id: "G10B_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: ECOLOGICAL INTERACTION ====================
        { id: "G10B_U6_1", type: "lesson", title: "6.1 Trophic Levels (Food chains, webs, energy flow)" },
        { id: "G10B_U6_2", type: "lesson", title: "6.2 Cycling of Materials in an Ecosystem (Carbon, Nitrogen, Phosphorus)" },
        { id: "G10B_U6_Q1", type: "quiz", title: "⚡ Quiz 9: Trophic Dynamics & Biogeochemical Cycles" },
        { id: "G10B_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        { id: "G10B_UT", type: "test", title: "🏆 Grade 10 Comprehensive Biology National Exam" }
      ]
    },
    Chemistry: {
      unitTitle: "Grade 10 Chemistry (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: CHEMICAL REACTIONS AND STOICHIOMETRY ====================
        { id: "G10C_U1_1", type: "lesson", title: "1.1 Introduction" },
        { id: "G10C_U1_2", type: "lesson", title: "1.2 Chemical Equations" },
        { id: "G10C_U1_3", type: "lesson", title: "1.3 Types of Chemical Reactions" },
        { id: "G10C_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Reaction Typing & Balancing" },
        { id: "G10C_U1_4", type: "lesson", title: "1.4 Oxidation and Reduction Reactions" },
        { id: "G10C_U1_5", type: "lesson", title: "1.5 Molecular and Formula Masses, the Mole Concept and Chemical Formulas" },
        { id: "G10C_U1_6", type: "lesson", title: "1.6 Stoichiometry" },
        { id: "G10C_U1_Q2", type: "quiz", title: "⚡ Quiz 2: Moles, Formulas & Mass Calculations" },
        { id: "G10C_U1_REV", type: "test", title: "📝 Unit 1 Review Exercises" },

        // ==================== UNIT 2: SOLUTIONS ====================
        { id: "G10C_U2_1", type: "lesson", title: "2.1 Heterogeneous and Homogeneous Mixtures" },
        { id: "G10C_U2_2", type: "lesson", title: "2.2 The Solution Process" },
        { id: "G10C_U2_3", type: "lesson", title: "2.3 Solubility as an Equilibrium Process" },
        { id: "G10C_U2_Q1", type: "quiz", title: "⚡ Quiz 3: Mixture Separation & Solubility Dynamics" },
        { id: "G10C_U2_4", type: "lesson", title: "2.4 Ways of Expressing Concentration of Solution" },
        { id: "G10C_U2_5", type: "lesson", title: "2.5 Preparation of Solutions" },
        { id: "G10C_U2_6", type: "lesson", title: "2.6 Solution Stoichiometry" },
        { id: "G10C_U2_Q2", type: "quiz", title: "⚡ Quiz 4: Solution Purity, Concentration & Molarity Math" },
        { id: "G10C_U2_7", type: "lesson", title: "2.7 Describing Reactions in Solution" },
        { id: "G10C_U2_REV", type: "test", title: "📝 Unit 2 Review Exercises" },

        // ==================== UNIT 3: IMPORTANT INORGANIC COMPOUNDS ====================
        { id: "G10C_U3_1", type: "lesson", title: "3.1 Introduction" },
        { id: "G10C_U3_2", type: "lesson", title: "3.2 Oxides" },
        { id: "G10C_U3_3", type: "lesson", title: "3.3 Acids" },
        { id: "G10C_U3_Q1", type: "quiz", title: "⚡ Quiz 5: Oxide Chemistry & Acid Attributes" },
        { id: "G10C_U3_4", type: "lesson", title: "3.4 Bases" },
        { id: "G10C_U3_5", type: "lesson", title: "3.5 Salts" },
        { id: "G10C_U3_Q2", type: "quiz", title: "⚡ Quiz 6: Alkaline Properties & Salt Compositions" },
        { id: "G10C_U3_REV", type: "test", title: "📝 Unit 3 Review Exercises" },

        // ==================== UNIT 4: ENERGY CHANGES AND ELECTROCHEMISTRY ====================
        { id: "G10C_U4_1", type: "lesson", title: "4.1 Introduction" },
        { id: "G10C_U4_2", type: "lesson", title: "4.2 Energy Changes in Electrochemistry" },
        { id: "G10C_U4_3", type: "lesson", title: "4.3 Electrochemical Cells" },
        { id: "G10C_U4_Q1", type: "quiz", title: "⚡ Quiz 7: Thermodynamics & Galvanic Cell Potentials" },
        { id: "G10C_U4_4", type: "lesson", title: "4.4 Electrolysis" },
        { id: "G10C_U4_REV", type: "test", title: "📝 Unit 4 Review Exercises" },

        // ==================== UNIT 5: METALS AND NONMETALS ====================
        { id: "G10C_U5_1", type: "lesson", title: "5.1 Introduction" },
        { id: "G10C_U5_2", type: "lesson", title: "5.2 General Properties of Metals and Production of Some Metals" },
        { id: "G10C_U5_3", type: "lesson", title: "5.3 Production of Some Important Nonmetals" },
        { id: "G10C_U5_Q1", type: "quiz", title: "⚡ Quiz 8: Extraction Metallurgy & Elemental Nonmetals" },
        { id: "G10C_U5_REV", type: "test", title: "📝 Unit 5 Review Exercises" },

        // ==================== UNIT 6: HYDROCARBONS AND THEIR NATURAL SOURCES ====================
        { id: "G10C_U6_1", type: "lesson", title: "6.1 Introduction" },
        { id: "G10C_U6_2", type: "lesson", title: "6.2 Saturated Hydrocarbons: Alkanes" },
        { id: "G10C_U6_3", type: "lesson", title: "6.3 Unsaturated Hydrocarbons: Alkenes, Alkynes and Aromatic Hydrocarbons" },
        { id: "G10C_U6_Q1", type: "quiz", title: "⚡ Quiz 9: Organic Carbon Links & Alkane/Alkene Formulas" },
        { id: "G10C_U6_4", type: "lesson", title: "6.4 Aromatic Hydrocarbons: Benzene" },
        { id: "G10C_U6_5", type: "lesson", title: "6.5 Natural Sources of Hydrocarbons" },
        { id: "G10C_U6_Q2", type: "quiz", title: "⚡ Quiz 10: Benzene Stability & Fossil Energy Resources" },
        { id: "G10C_U6_REV", type: "test", title: "📝 Unit 6 Review Exercises" },

        { id: "G10C_UT", type: "test", title: "🏆 Grade 10 Comprehensive Chemistry National Exam" }
      ]
    },
    English: {
      unitTitle: "Grade 10 English (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: POPULATION GROWTH ====================
        { id: "G10E_U1_1", type: "lesson", title: "1.1 Listening: Population Explosion" },
        { id: "G10E_U1_2", type: "lesson", title: "1.2 Speaking" },
        { id: "G10E_U1_3", type: "lesson", title: "1.3 Reading: Population Growth" },
        { id: "G10E_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Demographics Vocabulary & Reading" },
        { id: "G10E_U1_4", type: "lesson", title: "1.4 Grammar" },
        { id: "G10E_U1_5", type: "lesson", title: "1.5 Writing" },
        { id: "G10E_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: TRAVEL BEHAVIORS ====================
        { id: "G10E_U2_1", type: "lesson", title: "2.1 Listening: Travelling and Places" },
        { id: "G10E_U2_2", type: "lesson", title: "2.2 Speaking" },
        { id: "G10E_U2_3", type: "lesson", title: "2.3 Reading: Travel Behaviors" },
        { id: "G10E_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Transit Passages & Grammar Structures" },
        { id: "G10E_U2_4", type: "lesson", title: "2.4 Grammar" },
        { id: "G10E_U2_5", type: "lesson", title: "2.5 Writing" },
        { id: "G10E_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: PUNCTUALITY ====================
        { id: "G10E_U3_1", type: "lesson", title: "3.1 Listening: Punctual Students" },
        { id: "G10E_U3_2", type: "lesson", title: "3.2 Speaking" },
        { id: "G10E_U3_3", type: "lesson", title: "3.3 Reading: Punctuality" },
        { id: "G10E_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Time Literacy & Speaking Activities" },
        { id: "G10E_U3_4", type: "lesson", title: "3.4 Vocabulary" },
        { id: "G10E_U3_5", type: "lesson", title: "3.5 Grammar" },
        { id: "G10E_U3_6", type: "lesson", title: "3.6 Writing" },
        { id: "G10E_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: TOURIST ATTRACTIONS ====================
        { id: "G10E_U4_1", type: "lesson", title: "4.1 Listening: Giving Information for Tourists" },
        { id: "G10E_U4_2", type: "lesson", title: "4.2 Speaking" },
        { id: "G10E_U4_3", type: "lesson", title: "4.3 Reading: Tourism" },
        { id: "G10E_U4_Q1", type: "quiz", title: "⚡ Quiz 4: Hospitality Context Words" },
        { id: "G10E_U4_4", type: "lesson", title: "4.4 Vocabulary" },
        { id: "G10E_U4_5", type: "lesson", title: "4.5 Grammar" },
        { id: "G10E_U4_6", type: "lesson", title: "4.6 Writing" },
        { id: "G10E_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: HONEY PROCESSING ====================
        { id: "G10E_U5_1", type: "lesson", title: "5.1 Listening: Honey Processing" },
        { id: "G10E_U5_2", type: "lesson", title: "5.2 Speaking" },
        { id: "G10E_U5_3", type: "lesson", title: "5.3 Reading: The Importance of Honey" },
        { id: "G10E_U5_Q1", type: "quiz", title: "⚡ Quiz 5: Production Vocab & Technical Writing" },
        { id: "G10E_U5_4", type: "lesson", title: "5.4 Vocabulary" },
        { id: "G10E_U5_5", type: "lesson", title: "5.5 Grammar" },
        { id: "G10E_U5_6", type: "lesson", title: "5.6 Writing" },
        { id: "G10E_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: MIGRATION ====================
        { id: "G10E_U6_1", type: "lesson", title: "6.1 Listening" },
        { id: "G10E_U6_2", type: "lesson", title: "6.2 Speaking" },
        { id: "G10E_U6_3", type: "lesson", title: "6.3 Reading: Migration in Ethiopia" },
        { id: "G10E_U6_Q1", type: "quiz", title: "⚡ Quiz 6: Demographic Shifting Passages" },
        { id: "G10E_U6_4", type: "lesson", title: "6.4 Vocabulary" },
        { id: "G10E_U6_5", type: "lesson", title: "6.5 Grammar: Tense" },
        { id: "G10E_U6_6", type: "lesson", title: "6.6 Writing" },
        { id: "G10E_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        // ==================== UNIT 7: BRANDING ETHIOPIA AND NATIONAL IDENTITY ====================
        { id: "G10E_U7_1", type: "lesson", title: "7.1 Listening" },
        { id: "G10E_U7_2", type: "lesson", title: "7.2 Speaking" },
        { id: "G10E_U7_3", type: "lesson", title: "7.3 Reading" },
        { id: "G10E_U7_Q1", type: "quiz", title: "⚡ Quiz 7: Civic Identity & Reading Analysis" },
        { id: "G10E_U7_4", type: "lesson", title: "7.4 Vocabulary" },
        { id: "G10E_U7_5", type: "lesson", title: "7.5 Grammar" },
        { id: "G10E_U7_6", type: "lesson", title: "7.6 Writing" },
        { id: "G10E_U7_REV", type: "test", title: "📝 Unit 7 Review Exercise" },

        // ==================== UNIT 8: THE HEALING POWER OF PLANTS ====================
        { id: "G10E_U8_1", type: "lesson", title: "8.1 Listening" },
        { id: "G10E_U8_2", type: "lesson", title: "8.2 Speaking" },
        { id: "G10E_U8_3", type: "lesson", title: "8.3 Reading: A Traditional Medicine, Moringa Olifera" },
        { id: "G10E_U8_Q1", type: "quiz", title: "⚡ Quiz 8: Botanical Terms & Comprehension" },
        { id: "G10E_U8_4", type: "lesson", title: "8.4 Vocabulary" },
        { id: "G10E_U8_5", type: "lesson", title: "8.5 Grammar" },
        { id: "G10E_U8_6", type: "lesson", title: "8.6 Writing" },
        { id: "G10E_U8_REV", type: "test", title: "📝 Unit 8 Review Exercise" },

        // ==================== UNIT 9: MULTILINGUALISM ====================
        { id: "G10E_U9_1", type: "lesson", title: "9.1 Listening: Multilingualism" },
        { id: "G10E_U9_2", type: "lesson", title: "9.2 Speaking" },
        { id: "G10E_U9_3", type: "lesson", title: "9.3 Reading: Cognitive Benefits of being Multilingual" },
        { id: "G10E_U9_Q1", type: "quiz", title: "⚡ Quiz 9: Linguistics & Letter Writing Formats" },
        { id: "G10E_U9_4", type: "lesson", title: "9.4 Writing: Letters Writing" },
        { id: "G10E_U9_5", type: "lesson", title: "9.5 Grammar" },
        { id: "G10E_U9_6", type: "lesson", title: "9.6 Vocabulary" },
        { id: "G10E_U9_REV", type: "test", title: "📝 Unit 9 Review Exercise" },

        // ==================== UNIT 10: DIGITAL VS SATELLITE TELEVISION ====================
        { id: "G10E_U10_1", type: "lesson", title: "10.1 Listening" },
        { id: "G10E_U10_2", type: "lesson", title: "10.2 Speaking" },
        { id: "G10E_U10_3", type: "lesson", title: "10.3 Reading" },
        { id: "G10E_U10_Q1", type: "quiz", title: "⚡ Quiz 10: Media Literacy & Complex Sentences" },
        { id: "G10E_U10_4", type: "lesson", title: "10.4 Vocabulary" },
        { id: "G10E_U10_5", type: "lesson", title: "10.5 Grammar" },
        { id: "G10E_U10_6", type: "lesson", title: "10.6 Writing" },
        { id: "G10E_U10_REV", type: "test", title: "📝 Unit 10 Review Exercise" },

        { id: "G10E_UT", type: "test", title: "🏆 Grade 10 Comprehensive English National Exam" }
      ]
    }
  },
  Grade_11: {
    English: {
      unitTitle: "Grade 11 English (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: ENVIRONMENTAL HAZARDS ====================
        { id: "G11E_U1_1", type: "lesson", title: "1A Listening Skills" },
        { id: "G11E_U1_2", type: "lesson", title: "1B Speaking Skills" },
        { id: "G11E_U1_3", type: "lesson", title: "1C Reading Skills" },
        { id: "G11E_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Environmental Hazards Literacy" },
        { id: "G11E_U1_4", type: "lesson", title: "1D Vocabulary Skills" },
        { id: "G11E_U1_5", type: "lesson", title: "1E Grammar Skills" },
        { id: "G11E_U1_6", type: "lesson", title: "1F Writing Skills" },
        { id: "G11E_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: CIVILIZATION ====================
        { id: "G11E_U2_1", type: "lesson", title: "2A Listening Skills" },
        { id: "G11E_U2_2", type: "lesson", title: "2B Speaking Skills" },
        { id: "G11E_U2_3", type: "lesson", title: "2C Reading Skills" },
        { id: "G11E_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Historical Context & Expressions" },
        { id: "G11E_U2_4", type: "lesson", title: "2D Vocabulary Skills" },
        { id: "G11E_U2_5", type: "lesson", title: "2E Grammar Skills" },
        { id: "G11E_U2_6", type: "lesson", title: "2F Writing Skills" },
        { id: "G11E_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: CAUSES OF ROAD TRAFFIC ACCIDENTS ====================
        { id: "G11E_U3_1", type: "lesson", title: "3A Listening Skills" },
        { id: "G11E_U3_2", type: "lesson", title: "3B Speaking Skills" },
        { id: "G11E_U3_3", type: "lesson", title: "3C Reading Skills" },
        { id: "G11E_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Safety Vocabulary & Syntax Rules" },
        { id: "G11E_U3_4", type: "lesson", title: "3D Vocabulary Skills" },
        { id: "G11E_U3_5", type: "lesson", title: "3E Grammar Skills" },
        { id: "G11E_U3_6", type: "lesson", title: "3F Writing Skills" },
        { id: "G11E_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: PEOPLE AND NATURAL RESOURCES ====================
        { id: "G11E_U4_1", type: "lesson", title: "4A Listening Skills" },
        { id: "G11E_U4_2", type: "lesson", title: "4B Speaking Skills" },
        { id: "G11E_U4_3", type: "lesson", title: "4C Reading Skills" },
        { id: "G11E_U4_Q1", type: "quiz", title: "⚡ Quiz 4: Ecological Text Comprehension" },
        { id: "G11E_U4_4", type: "lesson", title: "4D Vocabulary Skills" },
        { id: "G11E_U4_5", type: "lesson", title: "4E Grammar Skills" },
        { id: "G11E_U4_6", type: "lesson", title: "4F Writing Skills" },
        { id: "G11E_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: IRRIGATION ====================
        { id: "G11E_U5_1", type: "lesson", title: "5A Listening Skills" },
        { id: "G11E_U5_2", type: "lesson", title: "5B Speaking Skills" },
        { id: "G11E_U5_3", type: "lesson", title: "5C Reading Skills" },
        { id: "G11E_U5_Q1", type: "quiz", title: "⚡ Quiz 5: Agricultural Terms & Passages" },
        { id: "G11E_U5_4", type: "lesson", title: "5D Vocabulary Skills" },
        { id: "G11E_U5_5", type: "lesson", title: "5E Grammar Skills" },
        { id: "G11E_U5_6", type: "lesson", title: "5F Writing Skills" },
        { id: "G11E_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: GLOBAL WARMING ====================
        { id: "G11E_U6_1", type: "lesson", title: "6A Listening Skills" },
        { id: "G11E_U6_2", type: "lesson", title: "6B Speaking Skills" },
        { id: "G11E_U6_3", type: "lesson", title: "6C Reading Skills" },
        { id: "G11E_U6_Q1", type: "quiz", title: "⚡ Quiz 6: Climate Crisis Analysis" },
        { id: "G11E_U6_4", type: "lesson", title: "6D Vocabulary Skills" },
        { id: "G11E_U6_5", type: "lesson", title: "6E Grammar Skills" },
        { id: "G11E_U6_6", type: "lesson", title: "6F Writing Skills" },
        { id: "G11E_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        // ==================== UNIT 7: MEDICAL TECHNOLOGY ====================
        { id: "G11E_U7_1", type: "lesson", title: "7A Listening Skills" },
        { id: "G11E_U7_2", type: "lesson", title: "7B Speaking Skills" },
        { id: "G11E_U7_3", type: "lesson", title: "7C Reading Skills" },
        { id: "G11E_U7_Q1", type: "quiz", title: "⚡ Quiz 7: Healthcare Innovation Terms" },
        { id: "G11E_U7_4", type: "lesson", title: "7D Vocabulary Skills" },
        { id: "G11E_U7_5", type: "lesson", title: "7E Grammar Skills" },
        { id: "G11E_U7_6", type: "lesson", title: "7F Writing Skills" },
        { id: "G11E_U7_REV", type: "test", title: "📝 Unit 7 Review Exercise" },

        // ==================== UNIT 8: POPULATION DENSITY ====================
        { id: "G11E_U8_1", type: "lesson", title: "8A Listening Skills" },
        { id: "G11E_U8_2", type: "lesson", title: "8B Speaking Skills" },
        { id: "G11E_U8_3", type: "lesson", title: "8C Reading Skills" },
        { id: "G11E_U8_Q1", type: "quiz", title: "⚡ Quiz 8: Demographics & Geopolitics Passages" },
        { id: "G11E_U8_4", type: "lesson", title: "8D Vocabulary Skills" },
        { id: "G11E_U8_5", type: "lesson", title: "8E Grammar Skills" },
        { id: "G11E_U8_6", type: "lesson", title: "8F Writing Skills" },
        { id: "G11E_U8_REV", type: "test", title: "📝 Unit 8 Review Exercise" },

        // ==================== UNIT 9: SUBSTANCE ABUSE ====================
        { id: "G11E_U9_1", type: "lesson", title: "9A Listening Skills" },
        { id: "G11E_U9_2", type: "lesson", title: "9B Speaking Skills" },
        { id: "G11E_U9_3", type: "lesson", title: "9C Reading Skills" },
        { id: "G11E_U9_Q1", type: "quiz", title: "⚡ Quiz 9: Social Pathology Terms" },
        { id: "G11E_U9_4", type: "lesson", title: "9D Vocabulary Skills" },
        { id: "G11E_U9_5", type: "lesson", title: "9E Grammar Skills" },
        { id: "G11E_U9_6", type: "lesson", title: "9F Writing Skills" },
        { id: "G11E_U9_REV", type: "test", title: "📝 Unit 9 Review Exercise" },

        // ==================== UNIT 10: NEW TECHNOLOGY ====================
        { id: "G11E_U10_1", type: "lesson", title: "10A Listening Skills" },
        { id: "G11E_U10_2", type: "lesson", title: "10B Speaking Skills" },
        { id: "G11E_U10_3", type: "lesson", title: "10C Reading Skills" },
        { id: "G11E_U10_Q1", type: "quiz", title: "⚡ Quiz 10: Cyber & Tech Developments Syntax" },
        { id: "G11E_U10_4", type: "lesson", title: "10D Vocabulary Skills" },
        { id: "G11E_U10_5", type: "lesson", title: "10E Grammar Skills" },
        { id: "G11E_U10_6", type: "lesson", title: "10F Writing Skills" },
        { id: "G11E_U10_REV", type: "test", title: "📝 Unit 10 Review Exercise" },

        { id: "G11E_UT", type: "test", title: "🏆 Grade 11 Comprehensive English National Exam" }
      ]
    },
    Chemistry: {
      unitTitle: "Grade 11 Chemistry (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: ATOMIC STRUCTURE AND PERIODIC PROPERTIES ====================
        { id: "G11C_U1_1", type: "lesson", title: "1.1 Introduction" },
        { id: "G11C_U1_2", type: "lesson", title: "1.2 Dalton's Atomic Theory and the Modern Atomic Theory" },
        { id: "G11C_U1_3", type: "lesson", title: "1.3 Early Experiments to Characterize the Atom" },
        { id: "G11C_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Early Theories & Subatomic Discoveries" },
        { id: "G11C_U1_4", type: "lesson", title: "1.4 Make-up of the Nucleus" },
        { id: "G11C_U1_5", type: "lesson", title: "1.5 Electromagnetic Radiation and Atomic Spectra" },
        { id: "G11C_U1_6", type: "lesson", title: "1.6 The Quantum Mechanical Model of the Atom" },
        { id: "G11C_U1_Q2", type: "quiz", title: "⚡ Quiz 2: Atomic Spectra, Bohr Model & Quantum Numbers" },
        { id: "G11C_U1_7", type: "lesson", title: "1.7 Electronic Configurations and Orbital Diagrams" },
        { id: "G11C_U1_8", type: "lesson", title: "1.8 Electronic Configurations and the Periodic Table of the Elements" },
        { id: "G11C_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: CHEMICAL BONDING ====================
        { id: "G11C_U2_1", type: "lesson", title: "2.1 Introduction to Chemical Bonding" },
        { id: "G11C_U2_2", type: "lesson", title: "2.2 Ionic Bonds" },
        { id: "G11C_U2_3", type: "lesson", title: "2.3 Covalent Bonds and Molecular Geometry" },
        { id: "G11C_U2_Q1", type: "quiz", title: "⚡ Quiz 3: Ionic Crystals & Covalent VSEPR Structures" },
        { id: "G11C_U2_4", type: "lesson", title: "2.4 Metallic Bonding" },
        { id: "G11C_U2_5", type: "lesson", title: "2.5 Chemical Bonding Theories (VB & MO Theory)" },
        { id: "G11C_U2_6", type: "lesson", title: "2.6 Types of Crystals" },
        { id: "G11C_U2_Q2", type: "quiz", title: "⚡ Quiz 4: Hybridization, MO Theory & Solid Matrixes" },
        { id: "G11C_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: PHYSICAL STATES OF MATTER ====================
        { id: "G11C_U3_1", type: "lesson", title: "3.1 Introduction" },
        { id: "G11C_U3_2", type: "lesson", title: "3.2 Kinetic Theory and Properties of Matter" },
        { id: "G11C_U3_3", type: "lesson", title: "3.3 The Gaseous State and Gas Laws" },
        { id: "G11C_U3_Q1", type: "quiz", title: "⚡ Quiz 5: Ideal Gas Laws & Kinetic Molecular Theory" },
        { id: "G11C_U3_4", type: "lesson", title: "3.4 The Liquid State" },
        { id: "G11C_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: CHEMICAL KINETICS ====================
        { id: "G11C_U4_1", type: "lesson", title: "4.1 Rate of Reaction" },
        { id: "G11C_U4_2", type: "lesson", title: "4.2 Theories of Reaction Rates" },
        { id: "G11C_U4_3", type: "lesson", title: "4.3 Factors Affecting Rate of Reaction" },
        { id: "G11C_U4_Q1", type: "quiz", title: "⚡ Quiz 6: Reaction Rates & Activation Energies" },
        { id: "G11C_U4_4", type: "lesson", title: "4.4 Rate Equation and Order of Reaction" },
        { id: "G11C_U4_5", type: "lesson", title: "4.5 Reaction Mechanisms" },
        { id: "G11C_U4_Q2", type: "quiz", title: "⚡ Quiz 7: Rate Laws, Reaction Orders & Mechanisms" },
        { id: "G11C_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: CHEMICAL EQUILIBRIUM ====================
        { id: "G11C_U5_1", type: "lesson", title: "5.1 Reversible Reactions and Chemical Equilibrium" },
        { id: "G11C_U5_2", type: "lesson", title: "5.2 Equilibrium Constants (Kc, Kp)" },
        { id: "G11C_U5_3", type: "lesson", title: "5.3 Factors Affecting Chemical Equilibrium" },
        { id: "G11C_U5_Q1", type: "quiz", title: "⚡ Quiz 8: Constants Expressions & Le Chatelier's Principle" },
        { id: "G11C_U5_4", type: "lesson", title: "5.4 Quantitative Applications of Equilibrium Constants" },
        { id: "G11C_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: SOME IMPORTANT OXYGEN-CONTAINING ORGANIC COMPOUNDS ====================
        { id: "G11C_U6_1", type: "lesson", title: "6.1 Introduction to Oxygen-Containing Organics" },
        { id: "G11C_U6_2", type: "lesson", title: "6.2 Alcohols and Ethers" },
        { id: "G11C_U6_3", type: "lesson", title: "6.3 Aldehydes and Ketones" },
        { id: "G11C_U6_Q1", type: "quiz", title: "⚡ Quiz 9: Alcohols, Ethers, Aldehydes & Ketones Nomenclature" },
        { id: "G11C_U6_4", type: "lesson", title: "6.4 Carboxylic Acids" },
        { id: "G11C_U6_5", type: "lesson", title: "6.5 Esters" },
        { id: "G11C_U6_6", type: "lesson", title: "6.6 Fats and Oils" },
        { id: "G11C_U6_Q2", type: "quiz", title: "⚡ Quiz 10: Acids, Esters, Lipids Properties & Reactions" },
        { id: "G11C_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        { id: "G11C_UT", type: "test", title: "🏆 Grade 11 Comprehensive Chemistry National Exam" }
      ]
    },
    Physics: {
      unitTitle: "Grade 11 Physics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: PHYSICS AND HUMAN SOCIETY ====================
        { id: "G11P_U1_1", type: "lesson", title: "1.1 Importance of Physics to Society" },
        { id: "G11P_U1_2", type: "lesson", title: "1.2 Physics Communities and Their Roles" },
        { id: "G11P_U1_3", type: "lesson", title: "1.3 Making of Physics Knowledge" },
        { id: "G11P_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Importance, Communities & Knowledge Production" },
        { id: "G11P_U1_4", type: "lesson", title: "1.4 The Mission of Physics and Career Awareness" },
        { id: "G11P_U1_5", type: "lesson", title: "1.5 Current Status of Physics" },
        { id: "G11P_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: VECTORS ====================
        { id: "G11P_U2_1", type: "lesson", title: "2.1 Vectors and Types of Vectors" },
        { id: "G11P_U2_2", type: "lesson", title: "2.2 Graphical Method of Addition of Vectors in Two Dimensions (2-D)" },
        { id: "G11P_U2_3", type: "lesson", title: "2.3 Algebraic Method of addition of vectors in Two Dimensions (2-D)" },
        { id: "G11P_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Vector Representation, Graphical & Algebraic Addition" },
        { id: "G11P_U2_4", type: "lesson", title: "2.4 Product of Vectors" },
        { id: "G11P_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: MOTION IN ONE AND TWO DIMENSIONS ====================
        { id: "G11P_U3_1", type: "lesson", title: "3.1 Uniformly Accelerated Motion in 1D" },
        { id: "G11P_U3_2", type: "lesson", title: "3.2 Equations of Uniformly Accelerated Motion in 1D" },
        { id: "G11P_U3_3", type: "lesson", title: "3.3 Graphical Representation of Uniformly accelerated Motion in 1 D" },
        { id: "G11P_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Uniformly Accelerated Kinetics & Motion Graphs" },
        { id: "G11P_U3_4", type: "lesson", title: "3.4 Vertical Motion" },
        { id: "G11P_U3_5", type: "lesson", title: "3.5 Uniform Circular Motion" },
        { id: "G11P_U3_Q2", type: "quiz", title: "⚡ Quiz 4: Free Fall Gravity & Angular Speeds" },
        { id: "G11P_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: DYNAMICS ====================
        { id: "G11P_U4_1", type: "lesson", title: "4.1 The Concept of Force and Newton's Laws of motion" },
        { id: "G11P_U4_2", type: "lesson", title: "4.2 Frictional Force" },
        { id: "G11P_U4_3", type: "lesson", title: "4.3 The First Condition of Equilibrium" },
        { id: "G11P_U4_Q1", type: "quiz", title: "⚡ Quiz 5: Forces, Newton's Laws & Friction Forces" },
        { id: "G11P_U4_4", type: "lesson", title: "4.4 Work, Energy and Power" },
        { id: "G11P_U4_5", type: "lesson", title: "4.5 Conservation of mechanical energy" },
        { id: "G11P_U4_6", type: "lesson", title: "4.6 Impulse and Linear Momentum" },
        { id: "G11P_U4_Q2", type: "quiz", title: "⚡ Quiz 6: Energy Laws, Power & Impulse Momentum" },
        { id: "G11P_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: HEAT CONDUCTION AND CALORIMETRY ====================
        { id: "G11P_U5_1", type: "lesson", title: "5.1 The Concept of Heat" },
        { id: "G11P_U5_2", type: "lesson", title: "5.2 Heat transfer mechanisms" },
        { id: "G11P_U5_3", type: "lesson", title: "5.3 Heat Capacity and Specific Heat Capacity" },
        { id: "G11P_U5_Q1", type: "quiz", title: "⚡ Quiz 7: Heat Energy, Radiation Modes & Capacities" },
        { id: "G11P_U5_4", type: "lesson", title: "5.4 Thermal expansion" },
        { id: "G11P_U5_5", type: "lesson", title: "5.5 Change of phase" },
        { id: "G11P_U5_6", type: "lesson", title: "5.6 Calorimetry" },
        { id: "G11P_U5_Q2", type: "quiz", title: "⚡ Quiz 8: Expansions, Phase Latents & Calorimeter Math" },
        { id: "G11P_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: ELECTROSTATICS AND ELECTRIC CIRCUIT ====================
        { id: "G11P_U6_1", type: "lesson", title: "6.1 Coulomb's Law" },
        { id: "G11P_U6_2", type: "lesson", title: "6.2 Electric Fields" },
        { id: "G11P_U6_3", type: "lesson", title: "6.3 Electric Potential" },
        { id: "G11P_U6_Q1", type: "quiz", title: "⚡ Quiz 9: Coulomb Forces, Field Strength & Potentials" },
        { id: "G11P_U6_4", type: "lesson", title: "6.4 Electric Current, Resistance and ohm's law" },
        { id: "G11P_U6_5", type: "lesson", title: "6.5 Capacitors and Capacitance" },
        { id: "G11P_U6_6", type: "lesson", title: "6.6 Electric Circuits in Our Surroundings" },
        { id: "G11P_U6_Q2", type: "quiz", title: "⚡ Quiz 10: Ohm's Circuits, Dielectrics & Local Grids" },
        { id: "G11P_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        // ==================== UNIT 7: NUCLEAR PHYSICS ====================
        { id: "G11P_U7_1", type: "lesson", title: "7.1 The nucleus" },
        { id: "G11P_U7_2", type: "lesson", title: "7.2 Radioactivity" },
        { id: "G11P_U7_3", type: "lesson", title: "7.3 Use of nuclear radiation" },
        { id: "G11P_U7_Q1", type: "quiz", title: "⚡ Quiz 11: Isotopes Nuclei, Decay Half-lives & Isotopes Use" },
        { id: "G11P_U7_4", type: "lesson", title: "7.4 Nuclear Reaction and Energy Production" },
        { id: "G11P_U7_5", type: "lesson", title: "7.5 Safety Rules Against Hazards of Nuclear Radiation" },
        { id: "G11P_U7_Q2", type: "quiz", title: "⚡ Quiz 12: Fission/Fusion & Radiation Safeguards" },
        { id: "G11P_U7_REV", type: "test", title: "📝 Unit 7 Review Exercise" },

        { id: "G11P_UT", type: "test", title: "🏆 Grade 11 Comprehensive Physics National Exam" }
      ]
    },
    Mathematics: {
      unitTitle: "Grade 11 Mathematics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: RELATIONS AND FUNCTIONS ====================
        { id: "G11M_U1_1", type: "lesson", title: "1.1 Relations" },
        { id: "G11M_U1_2", type: "lesson", title: "1.2 Inverse of Relations and Their Graphs" },
        { id: "G11M_U1_3", type: "lesson", title: "1.3 Types of Functions" },
        { id: "G11M_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Relations Mapping & Function Types" },
        { id: "G11M_U1_4", type: "lesson", title: "1.4 Composition of Functions" },
        { id: "G11M_U1_5", type: "lesson", title: "1.5 Inverse Functions and Their Graphs" },
        { id: "G11M_U1_6", type: "lesson", title: "1.6 Applications of Relations and Functions" },
        { id: "G11M_U1_Q2", type: "quiz", title: "⚡ Quiz 2: Functional Composition & Inverses" },
        { id: "G11M_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: RATIONAL EXPRESSIONS AND RATIONAL FUNCTIONS ====================
        { id: "G11M_U2_1", type: "lesson", title: "2.1 Rational Expressions" },
        { id: "G11M_U2_2", type: "lesson", title: "2.2 Rational Equations and Rational Inequalities" },
        { id: "G11M_U2_3", type: "lesson", title: "2.3 Rational Functions and Their Graphs" },
        { id: "G11M_U2_Q1", type: "quiz", title: "⚡ Quiz 3: Fractional Simplification & Asymptotes" },
        { id: "G11M_U2_4", type: "lesson", title: "2.4 Applications" },
        { id: "G11M_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: MATRICES ====================
        { id: "G11M_U3_1", type: "lesson", title: "3.1 The Concepts of a Matrix" },
        { id: "G11M_U3_2", type: "lesson", title: "3.2 Operations on Matrices" },
        { id: "G11M_U3_3", type: "lesson", title: "3.3 Special Types of Matrices" },
        { id: "G11M_U3_Q1", type: "quiz", title: "⚡ Quiz 4: Matrix Algebra & Dimension Types" },
        { id: "G11M_U3_4", type: "lesson", title: "3.4 Elementary Row Operations of Matrices" },
        { id: "G11M_U3_5", type: "lesson", title: "3.5 Systems of Linear Equations with Two or Three Variables" },
        { id: "G11M_U3_6", type: "lesson", title: "3.6 Solutions of Systems of Linear Equations" },
        { id: "G11M_U3_Q2", type: "quiz", title: "⚡ Quiz 5: Row Echelon Forms & Equation Eliminations" },
        { id: "G11M_U3_7", type: "lesson", title: "3.7 Inverse of a Square Matrix" },
        { id: "G11M_U3_8", type: "lesson", title: "3.8 Applications" },
        { id: "G11M_U3_Q3", type: "quiz", title: "⚡ Quiz 6: Square Inversion & Applied Systems" },
        { id: "G11M_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: DETERMINANTS AND THEIR PROPERTIES ====================
        { id: "G11M_U4_1", type: "lesson", title: "4.1 Determinants of Matrices of Order 2" },
        { id: "G11M_U4_2", type: "lesson", title: "4.2 Minors and Cofactors of Elements of Matrices" },
        { id: "G11M_U4_3", type: "lesson", title: "4.3 Determinants of Matrices of Order 3" },
        { id: "G11M_U4_Q1", type: "quiz", title: "⚡ Quiz 7: Determinants Evaluation & Minor Arrays" },
        { id: "G11M_U4_4", type: "lesson", title: "4.4 Properties of Determinants" },
        { id: "G11M_U4_5", type: "lesson", title: "4.5 Inverse of a Square Matrix of Order 2 and 3" },
        { id: "G11M_U4_6", type: "lesson", title: "4.6 Solutions of Systems of Linear Equations Using Cramer's Rule" },
        { id: "G11M_U4_7", type: "lesson", title: "4.7 Applications" },
        { id: "G11M_U4_Q2", type: "quiz", title: "⚡ Quiz 8: Cramer's Matrix Solutions & Proofs" },
        { id: "G11M_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: VECTORS ====================
        { id: "G11M_U5_1", type: "lesson", title: "5.1 Revision on Vectors and Scalars" },
        { id: "G11M_U5_2", type: "lesson", title: "5.2 Representation of vectors" },
        { id: "G11M_U5_3", type: "lesson", title: "5.3 Vector Product" },
        { id: "G11M_U5_Q1", type: "quiz", title: "⚡ Quiz 9: Directional Components & Cross Products" },
        { id: "G11M_U5_4", type: "lesson", title: "5.4 Application of Scalar and Cross Product" },
        { id: "G11M_U5_5", type: "lesson", title: "5.5 Application of Vectors" },
        { id: "G11M_U5_6", type: "lesson", title: "5.6 Applications" },
        { id: "G11M_U5_Q2", type: "quiz", title: "⚡ Quiz 10: Vector Products & System Multiplications" },
        { id: "G11M_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: TRANSFORMATIONS OF THE PLANE ====================
        { id: "G11M_U6_1", type: "lesson", title: "6.1 Introduction" },
        { id: "G11M_U6_2", type: "lesson", title: "6.2 Translation" },
        { id: "G11M_U6_3", type: "lesson", title: "6.3 Reflection" },
        { id: "G11M_U6_Q1", type: "quiz", title: "⚡ Quiz 11: Linear Translations & Reflections" },
        { id: "G11M_U6_4", type: "lesson", title: "6.4 Rotation" },
        { id: "G11M_U6_5", type: "lesson", title: "6.5 Applications" },
        { id: "G11M_U6_Q2", type: "quiz", title: "⚡ Quiz 12: Complex Rotations & Mappings" },
        { id: "G11M_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        // ==================== UNIT 7: STATISTICS ====================
        { id: "G11M_U7_1", type: "lesson", title: "7.1 Types of Data" },
        { id: "G11M_U7_2", type: "lesson", title: "7.2 Introduction to Grouped Data" },
        { id: "G11M_U7_3", type: "lesson", title: "7.3 Graphical Representation of Grouped Data" },
        { id: "G11M_U7_Q1", type: "quiz", title: "⚡ Quiz 13: Data Sets Classification & Histograms" },
        { id: "G11M_U7_4", type: "lesson", title: "7.4 Measures of Central Tendency and Their Interpretation" },
        { id: "G11M_U7_5", type: "lesson", title: "7.5 Real-life Application of Statistics" },
        { id: "G11M_U7_Q2", type: "quiz", title: "⚡ Quiz 14: Central Deviations & Statistics Applications" },
        { id: "G11M_U7_REV", type: "test", title: "📝 Unit 7 Review Exercise" },

        // ==================== UNIT 8: PROBABILITY ====================
        { id: "G11M_U8_1", type: "lesson", title: "8.1 Introduction" },
        { id: "G11M_U8_2", type: "lesson", title: "8.2 Fundamental Principle of Counting" },
        { id: "G11M_U8_3", type: "lesson", title: "8.3 Permutations and Combinations" },
        { id: "G11M_U8_Q1", type: "quiz", title: "⚡ Quiz 15: Factorial Counting, Permutations & Combinations" },
        { id: "G11M_U8_4", type: "lesson", title: "8.4 Binomial Theorem" },
        { id: "G11M_U8_5", type: "lesson", title: "8.5 Random Experiments and Their Outcomes" },
        { id: "G11M_U8_6", type: "lesson", title: "8.6 Events" },
        { id: "G11M_U8_Q2", type: "quiz", title: "⚡ Quiz 16: Binomial Expansions & Sample Event Spaces" },
        { id: "G11M_U8_7", type: "lesson", title: "8.7 Probability of an Event" },
        { id: "G11M_U8_8", type: "lesson", title: "8.8 Real-life Application of Probability" },
        { id: "G11M_U8_Q3", type: "quiz", title: "⚡ Quiz 17: Probability Equations & Distributions" },
        { id: "G11M_U8_REV", type: "test", title: "📝 Unit 8 Review Exercise" },

        { id: "G11M_UT", type: "test", title: "🏆 Grade 11 Comprehensive Mathematics National Exam" }
      ]
    },
    Biology: {
      unitTitle: "Grade 11 Biology (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: BIOLOGY AND TECHNOLOGY ====================
        { id: "G11B_U1_1", type: "lesson", title: "1.1 Learning from nature" },
        { id: "G11B_U1_2", type: "lesson", title: "1.2 Biology and technology" },
        { id: "G11B_U1_3", type: "lesson", title: "1.3 Impacts of biology and technology on society and the natural world" },
        { id: "G11B_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Bionics & Societal Technology Impacts" },
        { id: "G11B_U1_4", type: "lesson", title: "1.4 Ethical issues in biology" },
        { id: "G11B_U1_REV", type: "test", title: "📝 Unit One Review Questions" },

        // ==================== UNIT 2: ANIMALS ====================
        { id: "G11B_U2_1", type: "lesson", title: "2.1 Characteristics of animals" },
        { id: "G11B_U2_2", type: "lesson", title: "2.2 Invertebrates and Vertebrates" },
        { id: "G11B_U2_3", type: "lesson", title: "2.3 Reproduction in Animals" },
        { id: "G11B_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Animal Phylums & Metamorphosis Cycles" },
        { id: "G11B_U2_4", type: "lesson", title: "2.4 The economic importance of animals (Insects)" },
        { id: "G11B_U2_5", type: "lesson", title: "2.5 Animal Behavior" },
        { id: "G11B_U2_6", type: "lesson", title: "2.6 Homeostasis in animals" },
        { id: "G11B_U2_Q2", type: "quiz", title: "⚡ Quiz 3: Animal Ethology & Osmoregulation Systems" },
        { id: "G11B_U2_7", type: "lesson", title: "2.7 Renowned zoologists in Ethiopia" },
        { id: "G11B_U2_REV", type: "test", title: "📝 Unit Two Review Questions" },

        // ==================== UNIT 3: ENZYMES ====================
        { id: "G11B_U3_1", type: "lesson", title: "3.1 What are enzymes?" },
        { id: "G11B_U3_2", type: "lesson", title: "3.2 Properties and functions of enzymes" },
        { id: "G11B_U3_3", type: "lesson", title: "3.3 Protein structures" },
        { id: "G11B_U3_Q1", type: "quiz", title: "⚡ Quiz 4: Enzyme Properties & Amino Acid Folding" },
        { id: "G11B_U3_4", type: "lesson", title: "3.4 Enzyme substrate models" },
        { id: "G11B_U3_5", type: "lesson", title: "3.5 Enzyme regulation" },
        { id: "G11B_U3_6", type: "lesson", title: "3.6 Types of enzymes" },
        { id: "G11B_U3_Q2", type: "quiz", title: "⚡ Quiz 5: Kinetics Activation & Allosteric Controls" },
        { id: "G11B_U3_7", type: "lesson", title: "3.7 Factors affecting enzyme action" },
        { id: "G11B_U3_8", type: "lesson", title: "3.8 Enzyme kinetics" },
        { id: "G11B_U3_9", type: "lesson", title: "3.9 Application of enzymes in industries and their benefits" },
        { id: "G11B_U3_Q3", type: "quiz", title: "⚡ Quiz 6: Factors Actions & Industrial Fermentations" },
        { id: "G11B_U3_10", type: "lesson", title: "3.10 Malting in Ethiopian tradition" },
        { id: "G11B_U3_11", type: "lesson", title: "3.11 Renowned Biochemists in Ethiopia" },
        { id: "G11B_U3_REV", type: "test", title: "📝 Unit Three Review Questions" },

        // ==================== UNIT 4: GENETICS ====================
        { id: "G11B_U4_1", type: "lesson", title: "4.1 The genetic materials" },
        { id: "G11B_U4_2", type: "lesson", title: "4.2 The structure and function of DNA and RNA" },
        { id: "G11B_U4_3", type: "lesson", title: "4.3 The process of cell division" },
        { id: "G11B_U4_Q1", type: "quiz", title: "⚡ Quiz 7: Helical Nucleic Structures & Mitotic Divisions" },
        { id: "G11B_U4_4", type: "lesson", title: "4.4 Protein synthesis" },
        { id: "G11B_U4_5", type: "lesson", title: "4.5 Mendelian inheritance" },
        { id: "G11B_U4_6", type: "lesson", title: "4.6 Sex determination" },
        { id: "G11B_U4_Q2", type: "quiz", title: "⚡ Quiz 8: Transcription Translation & Monohybrid Crosses" },
        { id: "G11B_U4_7", type: "lesson", title: "4.7 Non-Mendelian Inheritance" },
        { id: "G11B_U4_8", type: "lesson", title: "4.8 Human pedigree analysis and its importance" },
        { id: "G11B_U4_9", type: "lesson", title: "4.9 Genetic disorders" },
        { id: "G11B_U4_Q3", type: "quiz", title: "⚡ Quiz 9: Codominance Arrays, Pedigree Charts & Disorders" },
        { id: "G11B_U4_10", type: "lesson", title: "4.10 Genetic testing and counseling" },
        { id: "G11B_U4_11", type: "lesson", title: "4.11 Gene therapy" },
        { id: "G11B_U4_12", type: "lesson", title: "4.12 Breeding" },
        { id: "G11B_U4_13", type: "lesson", title: "4.13 Bioinformatics introduction" },
        { id: "G11B_U4_Q4", type: "quiz", title: "⚡ Quiz 10: Therapy Vectors, Indigenous Breeding & Datasets" },
        { id: "G11B_U4_REV", type: "test", title: "📝 Unit Four Review Questions" },

        // ==================== UNIT 5: THE HUMAN BODY SYSTEMS ====================
        { id: "G11B_U5_1", type: "lesson", title: "5.1 Human Musculoskeletal Systems" },
        { id: "G11B_U5_2", type: "lesson", title: "5.2 The reproductive system" },
        { id: "G11B_U5_3", type: "lesson", title: "5.3 Harmful traditional practices" },
        { id: "G11B_U5_Q1", type: "quiz", title: "⚡ Quiz 11: Sarcomere Kinetics & Gametogenesis Feedback" },
        { id: "G11B_U5_4", type: "lesson", title: "5.4 Family planning" },
        { id: "G11B_U5_5", type: "lesson", title: "5.5 Effects of alcohol use, chewing Khat, cannabis and other drug uses on STIs transmission and unwanted pregnancy" },
        { id: "G11B_U5_Q2", type: "quiz", title: "⚡ Quiz 12: Contraceptive Methods & Substance Abuse Risks" },
        { id: "G11B_U5_REV", type: "test", title: "📝 Unit Five Review Questions" },

        // ==================== UNIT 6: POPULATION AND NATURAL RESOURCES ====================
        { id: "G11B_U6_1", type: "lesson", title: "6.1 Population size, density and dispersal" },
        { id: "G11B_U6_2", type: "lesson", title: "6.2 Natural resources" },
        { id: "G11B_U6_3", type: "lesson", title: "6.3 Conservation of natural resources in Ethiopia" },
        { id: "G11B_U6_Q1", type: "quiz", title: "⚡ Quiz 13: Logistic Growth Curves & Resource Conservation" },
        { id: "G11B_U6_4", type: "lesson", title: "6.4 Impact of traffic accident on wild and domestic animals" },
        { id: "G11B_U6_5", type: "lesson", title: "6.5 Impact of human activities on the environment" },
        { id: "G11B_U6_6", type: "lesson", title: "6.6 Indigenous conservation practices in Ethiopia" },
        { id: "G11B_U6_Q2", type: "quiz", title: "⚡ Quiz 14: Anthropogenic Biosphere Shifting & Local Customs" },
        { id: "G11B_U6_REV", type: "test", title: "📝 Unit Six Review Questions" },

        { id: "G11B_UT", type: "test", title: "🏆 Grade 11 Comprehensive Biology National Exam" }
      ]
    }
  },
  Grade_12: {
    Mathematics: {
      unitTitle: "Grade 12 Mathematics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: SEQUENCES AND SERIES ====================
        { id: "G12M_U1_1", type: "lesson", title: "1.1 Sequence" },
        { id: "G12M_U1_2", type: "lesson", title: "1.2 Arithmetic and Geometric Sequences" },
        { id: "G12M_U1_3", type: "lesson", title: "1.3 The Sigma Notation and Partial Sums" },
        { id: "G12M_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Progressions & Sigma Calculations" },
        { id: "G12M_U1_4", type: "lesson", title: "1.4 Infinite Series" },
        { id: "G12M_U1_5", type: "lesson", title: "1.5 Applications of Sequence and Series in Daily Life" },
        { id: "G12M_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: INTRODUCTIONS TO CALCULUS ====================
        { id: "G12M_U2_1", type: "lesson", title: "2.1 Introduction to Derivatives" },
        { id: "G12M_U2_2", type: "lesson", title: "2.2 Application of Derivative" },
        { id: "G12M_U2_3", type: "lesson", title: "2.3 Introduction to Integration" },
        { id: "G12M_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Rate of Change & Area Under Curves" },
        { id: "G12M_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: STATISTICS ====================
        { id: "G12M_U3_1", type: "lesson", title: "3.1 Measures of Absolute Dispersions" },
        { id: "G12M_U3_2", type: "lesson", title: "3.2 Interpretation of Relative Dispersions" },
        { id: "G12M_U3_3", type: "lesson", title: "3.3 Use of Frequency Curves" },
        { id: "G12M_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Variances & Frequency Distribution Geometry" },
        { id: "G12M_U3_4", type: "lesson", title: "3.4 Sampling Techniques" },
        { id: "G12M_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: INTRODUCTION TO LINEAR PROGRAMMING ====================
        { id: "G12M_U4_1", type: "lesson", title: "4.1 Graphical Solutions of System of Linear Inequalities" },
        { id: "G12M_U4_2", type: "lesson", title: "4.2 Maximum and Minimum Values" },
        { id: "G12M_U4_3", type: "lesson", title: "4.3 Applications" },
        { id: "G12M_U4_Q1", type: "quiz", title: "⚡ Quiz 4: Feasible Regions & Feasible Maximum Optimization" },
        { id: "G12M_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: MATHEMATICAL APPLICATIONS IN BUSINESS ====================
        { id: "G12M_U5_1", type: "lesson", title: "5.1 Basic Mathematical Concepts in Business" },
        { id: "G12M_U5_2", type: "lesson", title: "5.2 Time Value of Money" },
        { id: "G12M_U5_3", type: "lesson", title: "5.3 Saving, Investing and Borrowing Money" },
        { id: "G12M_U5_Q1", type: "quiz", title: "⚡ Quiz 5: Compound Interest Rates & Annuities" },
        { id: "G12M_U5_4", type: "lesson", title: "5.4 Taxation" },
        { id: "G12M_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        { id: "G12M_UT", type: "test", title: "🏆 Grade 12 Comprehensive Mathematics National Exam" }
      ]
    },
    Physics: {
      unitTitle: "Grade 12 Physics (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: APPLICATION OF PHYSICS IN OTHER FIELDS ====================
        { id: "G12P_U1_1", type: "lesson", title: "1.1 Physics and other sciences" },
        { id: "G12P_U1_2", type: "lesson", title: "1.2 Physics and engineering" },
        { id: "G12P_U1_3", type: "lesson", title: "1.3 Medical physics" },
        { id: "G12P_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Interdisciplinary & Medical Physics" },
        { id: "G12P_U1_4", type: "lesson", title: "1.4 Physics and defense technology" },
        { id: "G12P_U1_5", type: "lesson", title: "1.5 Physics in communication" },
        { id: "G12P_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: TWO-DIMENSIONAL MOTION ====================
        { id: "G12P_U2_1", type: "lesson", title: "2.1 Projectile motion" },
        { id: "G12P_U2_2", type: "lesson", title: "2.2 Rotational Motion" },
        { id: "G12P_U2_3", type: "lesson", title: "2.3 Rotational Dynamics" },
        { id: "G12P_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Projectile Kinetics & Rotational Torques" },
        { id: "G12P_U2_4", type: "lesson", title: "2.4 Planetary motion and Kepler's laws" },
        { id: "G12P_U2_5", type: "lesson", title: "2.5 Newton's law of universal Gravitation" },
        { id: "G12P_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: FLUID MECHANICS ====================
        { id: "G12P_U3_1", type: "lesson", title: "3.1 Fluid Statics" },
        { id: "G12P_U3_2", type: "lesson", title: "3.2 Pressure in fluids at rest" },
        { id: "G12P_U3_3", type: "lesson", title: "3.3 Archimedes' principle" },
        { id: "G12P_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Hydrostatics, Pascal & Buoyancy Vectors" },
        { id: "G12P_U3_4", type: "lesson", title: "3.4 Fluid flow" },
        { id: "G12P_U3_5", type: "lesson", title: "3.5 Safety and high pressure" },
        { id: "G12P_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: ELECTROMAGNETISM ====================
        { id: "G12P_U4_1", type: "lesson", title: "4.1 Magnets and Magnetic field" },
        { id: "G12P_U4_2", type: "lesson", title: "4.2 Magnetic field lines" },
        { id: "G12P_U4_3", type: "lesson", title: "4.3 Current and Magnetism" },
        { id: "G12P_U4_Q1", type: "quiz", title: "⚡ Quiz 4: Magnetic Induction & Current Fields" },
        { id: "G12P_U4_4", type: "lesson", title: "4.4 Electromagnetic Induction" },
        { id: "G12P_U4_5", type: "lesson", title: "4.5 Faraday's Law of electromagnetic Induction" },
        { id: "G12P_U4_6", type: "lesson", title: "4.6 Transformers" },
        { id: "G12P_U4_Q2", type: "quiz", title: "⚡ Quiz 5: Faraday's Flux Laws & Transformers" },
        { id: "G12P_U4_7", type: "lesson", title: "4.7 Application and safety" },
        { id: "G12P_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: BASICS OF ELECTRONICS ====================
        { id: "G12P_U5_1", type: "lesson", title: "5.1 Semiconductors" },
        { id: "G12P_U5_2", type: "lesson", title: "5.2 Diodes and their Functions" },
        { id: "G12P_U5_3", type: "lesson", title: "5.3 Rectification" },
        { id: "G12P_U5_Q1", type: "quiz", title: "⚡ Quiz 6: P-N Junctions, Diodes & Signal Rectifiers" },
        { id: "G12P_U5_4", type: "lesson", title: "5.4 Transistors and their application" },
        { id: "G12P_U5_5", type: "lesson", title: "5.5 Integrated Circuits" },
        { id: "G12P_U5_6", type: "lesson", title: "5.6 Logic gates and logic circuits" },
        { id: "G12P_U5_Q2", type: "quiz", title: "⚡ Quiz 7: Transistors, ICs & Binary Logic Networks" },
        { id: "G12P_U5_7", type: "lesson", title: "5.7 Application of electronics" },
        { id: "G12P_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        { id: "G12P_UT", type: "test", title: "🏆 Grade 12 Comprehensive Physics National Exam" }
      ]
    },
    Biology: {
      unitTitle: "Grade 12 Biology (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: APPLICATION OF BIOLOGY ====================
        { id: "G12B_U1_1", type: "lesson", title: "1.1 Application in Conservation of Natural Resources" },
        { id: "G12B_U1_2", type: "lesson", title: "1.2 Food and Nutrition Security" },
        { id: "G12B_U1_3", type: "lesson", title: "1.3 Creating Conscious Citizens and Ensuring Sustainable Development" },
        { id: "G12B_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Conservation Security & Sustainable Citizenry" },
        { id: "G12B_U1_4", type: "lesson", title: "1.4 Applications in Biotechnology" },
        { id: "G12B_U1_REV", type: "test", title: "📝 Unit Review Questions" },

        // ==================== UNIT 2: MICROORGANISMS ====================
        { id: "G12B_U2_1", type: "lesson", title: "2.1 Eubacteria (Structure, Shapes, Reproduction)" },
        { id: "G12B_U2_2", type: "lesson", title: "2.2 Archaea (Beneficial Aspects & Growth Factors)" },
        { id: "G12B_U2_3", type: "lesson", title: "2.3 Fungi (Characteristics, Ecology, Classification)" },
        { id: "G12B_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Bacteria Profiles, Archaea Extremes & True Fungi" },
        { id: "G12B_U2_4", type: "lesson", title: "2.4 Protozoa (Common Protozoan Diseases)" },
        { id: "G12B_U2_5", type: "lesson", title: "2.5 Viruses (Characteristics, Symmetry, Classification)" },
        { id: "G12B_U2_6", type: "lesson", title: "2.6 Normal Microbiota" },
        { id: "G12B_U2_Q2", type: "quiz", title: "⚡ Quiz 3: Protozoan Pathogens, Viral Capsids & Microbiota" },
        { id: "G12B_U2_7", type: "lesson", title: "2.7 Modes of Disease Transmission and Ways of Prevention" },
        { id: "G12B_U2_8", type: "lesson", title: "2.8 Uses of Microorganisms" },
        { id: "G12B_U2_9", type: "lesson", title: "2.9 Controlling Microorganisms" },
        { id: "G12B_U2_11", type: "lesson", title: "2.11 Renowned Microbiologists in Ethiopia" },
        { id: "G12B_U2_Q3", type: "quiz", title: "⚡ Quiz 4: Vector Control, Bio-industries & Local Science History" },
        { id: "G12B_U2_REV", type: "test", title: "📝 Unit Review Questions" },

        // ==================== UNIT 3: ENERGY TRANSFORMATION ====================
        { id: "G12B_U3_1", type: "lesson", title: "3.1 Cellular Metabolism" },
        { id: "G12B_U3_2", type: "lesson", title: "3.2 Photosynthesis (Pigments & Calvin Cycle)" },
        { id: "G12B_U3_3", type: "lesson", title: "3.3 Contributions of Photosynthesis for Continuity of Life" },
        { id: "G12B_U3_Q1", type: "quiz", title: "⚡ Quiz 5: Metabolic Pathways & Photosynthetic Carbon Fixation" },
        { id: "G12B_U3_4", type: "lesson", title: "3.4 Cellular Respiration (Mitochondria Site Kinetics)" },
        { id: "G12B_U3_REV", type: "test", title: "📝 Unit Review Questions" },

        // ==================== UNIT 4: EVOLUTION ====================
        { id: "G12B_U4_1", type: "lesson", title: "4.1 Evolution (Definition, Theories, Evidences, Selection, Drift)" },
        { id: "G12B_U4_2", type: "lesson", title: "4.2 Renowned Anthropologists in Ethiopia" },
        { id: "G12B_U4_3", type: "lesson", title: "4.3 Renowned Evolutionists in Ethiopia" },
        { id: "G12B_U4_Q1", type: "quiz", title: "⚡ Quiz 6: Evolutionary Evidence, Drift Dynamics & Fossil Records" },
        { id: "G12B_U4_REV", type: "test", title: "📝 Unit Review Questions" },

        // ==================== UNIT 5: THE HUMAN BODY SYSTEM ====================
        { id: "G12B_U5_1", type: "lesson", title: "5.1 The Nervous System (Neurons, Impulses, Reflex, Drug Abuse)" },
        { id: "G12B_U5_2", type: "lesson", title: "5.2 Sense Organs (Skin, Tongue, Nose, Eye, Ear, Endocrine)" },
        { id: "G12B_U5_3", type: "lesson", title: "5.3 Homeostasis in the Human Body (Human Kidney Structure)" },
        { id: "G12B_U5_Q1", type: "quiz", title: "⚡ Quiz 7: Synaptic Transmissions, Sensory Transductions & Nephron Calculus" },
        { id: "G12B_U5_REV", type: "test", title: "📝 Unit Review Questions" },

        // ==================== UNIT 6: CLIMATE CHANGE ====================
        { id: "G12B_U6_1", type: "lesson", title: "6.1 Climate Change: Causes and Effects" },
        { id: "G12B_U6_2", type: "lesson", title: "6.2 Effects of Climate Change (Biodiversity, Agriculture, Forestry)" },
        { id: "G12B_U6_3", type: "lesson", title: "6.3 International Conventions (UNFCCC, Kyoto Protocol, Implementation)" },
        { id: "G12B_U6_Q1", type: "quiz", title: "⚡ Quiz 8: Greenhouses Forcings, Anthropogenic Impacts & Global Treaties" },
        { id: "G12B_U6_REV", type: "test", title: "📝 Unit Review Questions" },

        { id: "G12B_UT", type: "test", title: "🏆 Grade 12 Comprehensive Biology National Exam" }
      ]
    },
    Chemistry: {
      unitTitle: "Grade 12 Chemistry (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: ACID-BASE EQUILIBRIA ====================
        { id: "G12C_U1_1", type: "lesson", title: "1.1 Acid-Base Concepts (Arrhenius, Brønsted-Lowry, Lewis)" },
        { id: "G12C_U1_2", type: "lesson", title: "1.2 Ionic Equilibria of Weak Acids and Bases (pH, Measures of Strength)" },
        { id: "G12C_U1_3", type: "lesson", title: "1.3 Common Ion Effect and Buffer Solutions" },
        { id: "G12C_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Weak Electrolytes & Buffer Calculations" },
        { id: "G12C_U1_4", type: "lesson", title: "1.4 Hydrolysis of Salts (Strong/Weak Combos)" },
        { id: "G12C_U1_5", type: "lesson", title: "1.5 Acid-Base Indicators and Titrations" },
        { id: "G12C_U1_REV", type: "test", title: "📝 Unit 1 Review Exercises" },

        // ==================== UNIT 2: ELECTROCHEMISTRY ====================
        { id: "G12C_U2_1", type: "lesson", title: "2.1 Oxidation-Reduction Reactions (Balancing Redox)" },
        { id: "G12C_U2_2", type: "lesson", title: "2.2 Electrolysis of Aqueous Solutions (Preferential Discharge)" },
        { id: "G12C_U2_3", type: "lesson", title: "2.3 Quantitative Aspects of Electrolysis (Faraday's 1st and 2nd Laws)" },
        { id: "G12C_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Redox Balancing & Faraday's Laws Math" },
        { id: "G12C_U2_4", type: "lesson", title: "2.4 Industrial Application of Electrolysis" },
        { id: "G12C_U2_5", type: "lesson", title: "2.5 Voltaic Cells" },
        { id: "G12C_U2_REV", type: "test", title: "📝 Unit 2 Review Exercises" },

        // ==================== UNIT 3: INDUSTRIAL CHEMISTRY ====================
        { id: "G12C_U3_1", type: "lesson", title: "3.1 Introduction to Industrial Chemistry" },
        { id: "G12C_U3_2", type: "lesson", title: "3.2 Natural Resources and Industry (Raw Materials)" },
        { id: "G12C_U3_3", type: "lesson", title: "3.3 Manufacturing of Valuable Products/Chemicals (Ammonia, Nitric Acid, Fertilizers, Sulphuric Acid)" },
        { id: "G12C_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Industrial Synthesis Pathways & Catalysts" },
        { id: "G12C_U3_4", type: "lesson", title: "3.4 Common Pesticides and Herbicides" },
        { id: "G12C_U3_5", type: "lesson", title: "3.5 Sodium Carbonate and Sodium Hydroxide (NaOH)" },
        { id: "G12C_U3_6", type: "lesson", title: "3.6 Some Manufacturing Industries in Ethiopia (Glass, Ceramics, Cement, Sugar, Paper, Tannery, Soap)" },
        { id: "G12C_U3_Q2", type: "quiz", title: "⚡ Quiz 4: Local Chemical Production Processes" },
        { id: "G12C_U3_REV", type: "test", title: "📝 Unit 3 Review Exercises" },

        // ==================== UNIT 4: POLYMERS ====================
        { id: "G12C_U4_1", type: "lesson", title: "4.1 Introduction to Polymers" },
        { id: "G12C_U4_2", type: "lesson", title: "4.2 Polymerization Reactions" },
        { id: "G12C_U4_3", type: "lesson", title: "4.3 Classification of Polymers" },
        { id: "G12C_U4_Q1", type: "quiz", title: "⚡ Quiz 5: Addition vs Condensation Polymer Formations" },
        { id: "G12C_U4_REV", type: "test", title: "📝 Unit 4 Review Exercises" },

        // ==================== UNIT 5: INTRODUCTION TO ENVIRONMENTAL CHEMISTRY ====================
        { id: "G12C_U5_1", type: "lesson", title: "5.1 Introduction (Components & Natural Cycles)" },
        { id: "G12C_U5_2", type: "lesson", title: "5.2 Environmental Pollution (Air, Water, Land)" },
        { id: "G12C_U5_3", type: "lesson", title: "5.3 Global Warming and Climate Change (Chemistry of Greenhouse Gases)" },
        { id: "G12C_U5_Q1", type: "quiz", title: "⚡ Quiz 6: Atmospheric Chemical Forcings & Pollutants" },
        { id: "G12C_U5_4", type: "lesson", title: "5.4 Green Chemistry and Cleaner Production" },
        { id: "G12C_U5_REV", type: "test", title: "📝 Unit 5 Review Exercises" },

        { id: "G12C_UT", type: "test", title: "🏆 Grade 12 Comprehensive Chemistry National Exam" }
      ]
    },
    English: {
      unitTitle: "Grade 12 English (New National Curriculum)",
      lessons: [
        // ==================== UNIT 1: SUSTAINABLE DEVELOPMENT ====================
        { id: "G12E_U1_1", type: "lesson", title: "1A Listening Skills" },
        { id: "G12E_U1_2", type: "lesson", title: "1B Speaking Skills" },
        { id: "G12E_U1_3", type: "lesson", title: "1C Reading Skills" },
        { id: "G12E_U1_Q1", type: "quiz", title: "⚡ Quiz 1: Sustainability Comprehension" },
        { id: "G12E_U1_4", type: "lesson", title: "1D Vocabulary Skills" },
        { id: "G12E_U1_5", type: "lesson", title: "1E Grammar Skills" },
        { id: "G12E_U1_6", type: "lesson", title: "1F Writing Skills" },
        { id: "G12E_U1_REV", type: "test", title: "📝 Unit 1 Review Exercise" },

        // ==================== UNIT 2: TIME MANAGEMENT ====================
        { id: "G12E_U2_1", type: "lesson", title: "2A Listening Skills" },
        { id: "G12E_U2_2", type: "lesson", title: "2B Speaking Skills" },
        { id: "G12E_U2_3", type: "lesson", title: "2C Reading Skills" },
        { id: "G12E_U2_Q1", type: "quiz", title: "⚡ Quiz 2: Productivity Expressions & Grammar" },
        { id: "G12E_U2_4", type: "lesson", title: "2D Vocabulary Skills" },
        { id: "G12E_U2_5", type: "lesson", title: "2E Grammar" },
        { id: "G12E_U2_6", type: "lesson", title: "2F Writing Skills" },
        { id: "G12E_U2_REV", type: "test", title: "📝 Unit 2 Review Exercise" },

        // ==================== UNIT 3: EVIDENCE ON TRAFFIC ACCIDENT ====================
        { id: "G12E_U3_1", type: "lesson", title: "3A Listening skills" },
        { id: "G12E_U3_2", type: "lesson", title: "3B Speaking skills" },
        { id: "G12E_U3_3", type: "lesson", title: "3C Reading skills" },
        { id: "G12E_U3_Q1", type: "quiz", title: "⚡ Quiz 3: Legal/Safety Context Literacy" },
        { id: "G12E_U3_4", type: "lesson", title: "3D Vocabulary Skills" },
        { id: "G12E_U3_5", type: "lesson", title: "3E Grammar Skills" },
        { id: "G12E_U3_6", type: "lesson", title: "3F Writing: Narrative Essay" },
        { id: "G12E_U3_REV", type: "test", title: "📝 Unit 3 Review Exercise" },

        // ==================== UNIT 4: NATURAL RESOURCE MANAGEMENT ====================
        { id: "G12E_U4_1", type: "lesson", title: "4A Listening Skills" },
        { id: "G12E_U4_2", type: "lesson", title: "4B Speaking Skills" },
        { id: "G12E_U4_3", type: "lesson", title: "4C Reading Skills" },
        { id: "G12E_U4_Q1", type: "quiz", title: "⚡ Quiz 4: Conservation Passages & Word Forms" },
        { id: "G12E_U4_4", type: "lesson", title: "4D Vocabulary Skills" },
        { id: "G12E_U4_5", type: "lesson", title: "4E Grammar Skills" },
        { id: "G12E_U4_6", type: "lesson", title: "4F Writing Skills" },
        { id: "G12E_U4_REV", type: "test", title: "📝 Unit 4 Review Exercise" },

        // ==================== UNIT 5: MECHANIZED AGRICULTURE ====================
        { id: "G12E_U5_1", type: "lesson", title: "5A Listening Skills" },
        { id: "G12E_U5_2", type: "lesson", title: "5B Speaking Skills" },
        { id: "G12E_U5_3", type: "lesson", title: "5C Reading Skills" },
        { id: "G12E_U5_Q1", type: "quiz", title: "⚡ Quiz 5: Farming Technology Syntax" },
        { id: "G12E_U5_4", type: "lesson", title: "5D Vocabulary Skills" },
        { id: "G12E_U5_5", type: "lesson", title: "5E Grammar Skills" },
        { id: "G12E_U5_6", type: "lesson", title: "5F Writing Skills" },
        { id: "G12E_U5_REV", type: "test", title: "📝 Unit 5 Review Exercise" },

        // ==================== UNIT 6: GREEN ECONOMIES ====================
        { id: "G12E_U6_1", type: "lesson", title: "6A Listening" },
        { id: "G12E_U6_2", type: "lesson", title: "6B Speaking Skills" },
        { id: "G12E_U6_3", type: "lesson", title: "6C Reading Skills" },
        { id: "G12E_U6_Q1", type: "quiz", title: "⚡ Quiz 6: Sustainable Economics Concepts" },
        { id: "G12E_U6_4", type: "lesson", title: "6D Vocabulary Skills" },
        { id: "G12E_U6_5", type: "lesson", title: "6E Grammar Skills" },
        { id: "G12E_U6_6", type: "lesson", title: "6F Writing Skills" },
        { id: "G12E_U6_REV", type: "test", title: "📝 Unit 6 Review Exercise" },

        // ==================== UNIT 7: NATIONAL PRIDE ====================
        { id: "G12E_U7_1", type: "lesson", title: "7A Listening Skills" },
        { id: "G12E_U7_2", type: "lesson", title: "7B Speaking Skills" },
        { id: "G12E_U7_3", type: "lesson", title: "7C Reading Skills" },
        { id: "G12E_U7_Q1", type: "quiz", title: "⚡ Quiz 7: Civic Identity Text Analysis" },
        { id: "G12E_U7_4", type: "lesson", title: "7D Vocabulary Skills" },
        { id: "G12E_U7_5", type: "lesson", title: "7E Grammar Skills" },
        { id: "G12E_U7_6", type: "lesson", title: "7F Writing Skills" },
        { id: "G12E_U7_REV", type: "test", title: "📝 Unit 7 Review Exercise" },

        // ==================== UNIT 8: TELEMEDICINE ====================
        { id: "G12E_U8_1", type: "lesson", title: "8A Listening Skills" },
        { id: "G12E_U8_2", type: "lesson", title: "8B Speaking Skills" },
        { id: "G12E_U8_3", type: "lesson", title: "8C Reading Skills" },
        { id: "G12E_U8_Q1", type: "quiz", title: "⚡ Quiz 8: Digital Health Vocabulary" },
        { id: "G12E_U8_4", type: "lesson", title: "8D Vocabulary Skills" },
        { id: "G12E_U8_5", type: "lesson", title: "8E Grammar Skills" },
        { id: "G12E_U8_6", type: "lesson", title: "8F Writing Skills" },
        { id: "G12E_U8_REV", type: "test", title: "📝 Unit 8 Review Exercise" },

        // ==================== UNIT 9: CONFLICT MANAGEMENT ====================
        { id: "G12E_U9_1", type: "lesson", title: "9A Listening Skills" },
        { id: "G12E_U9_2", type: "lesson", title: "9B Speaking Skills" },
        { id: "G12E_U9_3", type: "lesson", title: "9C Reading Skills" },
        { id: "G12E_U9_Q1", type: "quiz", title: "⚡ Quiz 9: Mediation Passages & Grammar" },
        { id: "G12E_U9_4", type: "lesson", title: "9D Vocabulary Skills" },
        { id: "G12E_U9_5", type: "lesson", title: "9E Grammar Skills" },
        { id: "G12E_U9_6", type: "lesson", title: "9F Writing Skills" },
        { id: "G12E_U9_REV", type: "test", title: "📝 Unit 9 Review Exercise" },

        // ==================== UNIT 10: ROBOTICS ====================
        { id: "G12E_U10_1", type: "lesson", title: "10A Listening Skills" },
        { id: "G12E_U10_2", type: "lesson", title: "10B Speaking Skills" },
        { id: "G12E_U10_3", type: "lesson", title: "10C Reading Skills" },
        { id: "G12E_U10_Q1", type: "quiz", title: "⚡ Quiz 10: Tech Engineering Systems Literacy" },
        { id: "G12E_U10_4", type: "lesson", title: "10D Vocabulary Skills" },
        { id: "G12E_U10_5", type: "lesson", title: "10E Grammar Skills" },
        { id: "G12E_U10_6", type: "lesson", title: "10F Writing Skills" },
        { id: "G12E_U10_REV", type: "test", title: "📝 Unit 10 Review Exercise" },

        { id: "G12E_UT", type: "test", title: "🏆 Grade 12 Comprehensive English National Exam" }
      ]
    }
  }
};
