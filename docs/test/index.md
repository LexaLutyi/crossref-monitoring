# My maf

???+ note "Amino_acids"
	Only given if the variation affects the protein-coding sequence  
	
	Not null: 491 (28.68%)  
	Unique: 109  
	```
	Value Count
	-----------
	L        21
	R        21
	R/L      18
	A/S      17
	A        17
	G        16
	P        15
	A/V      12
	P/T      12
	S        12
	P/S      11
	R/S      11
	G/C      10
	T         9
	G/V       9
	A/T       9
	D/E       8
	S/I       8
	Q/K       8
	G/D       8
	P/Q       7
	F/L       7
	V/L       7
	E/*       7
	L/I       6
	L/F       6
	D/Y       6
	I         6
	A/D       5
	A/E       5
	...
	```
???+ note "NCBI_Build"
	The reference genome used for the alignment (GRCh38)  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value  Count
	------------
	GRCh38  1712
	```
???+ note "Tumor_Seq_Allele2"
	Tumor sequencing (discovery) allele 2  
	
	Not null: 1712 (100.0%)  
	Unique: 56  
	```
	Value        Count
	------------------
	A              621
	T              575
	G              168
	-              150
	C              139
	CC               3
	AG               3
	GA               2
	GG               2
	AC               2
	CT               2
	GTGTGTGTGT       1
	TTC              1
	TAG              1
	TCAA             1
	GAT              1
	ACTTTAAAA        1
	GGATTCTC         1
	CTC              1
	GT               1
	ACACACACACAC     1
	TCTT             1
	AGGCA            1
	CCCCC            1
	AAT              1
	AT               1
	GCCTCA           1
	GTATGTAT         1
	TT               1
	ACT              1
	...
	```
???+ note "Consequence"
	Consequence type of this variant; sequence ontology terms  
	
	Not null: 1712 (100.0%)  
	Unique: 29  
	```
	Value                                                                                                   Count
	-------------------------------------------------------------------------------------------------------------
	intron_variant                                                                                            753
	missense_variant                                                                                          323
	intergenic_variant                                                                                        162
	synonymous_variant                                                                                        125
	upstream_gene_variant                                                                                      63
	downstream_gene_variant                                                                                    56
	3_prime_UTR_variant                                                                                        45
	intron_variant,non_coding_transcript_variant                                                               37
	non_coding_transcript_exon_variant                                                                         30
	5_prime_UTR_variant                                                                                        26
	stop_gained                                                                                                17
	intron_variant,splice_polypyrimidine_tract_variant                                                         15
	missense_variant,splice_region_variant                                                                     13
	splice_region_variant,intron_variant,splice_polypyrimidine_tract_variant                                   10
	splice_acceptor_variant                                                                                     5
	splice_region_variant,intron_variant                                                                        5
	frameshift_variant                                                                                          4
	splice_donor_variant                                                                                        4
	splice_region_variant,synonymous_variant                                                                    4
	intron_variant,splice_donor_5th_base_variant                                                                3
	splice_region_variant,5_prime_UTR_variant                                                                   2
	intron_variant,splice_donor_region_variant                                                                  2
	stop_gained,splice_region_variant                                                                           2
	stop_lost                                                                                                   1
	splice_region_variant,intron_variant,non_coding_transcript_variant,splice_polypyrimidine_tract_varia...     1
	inframe_deletion                                                                                            1
	start_lost                                                                                                  1
	3_prime_UTR_variant,NMD_transcript_variant                                                                  1
	intron_variant,NMD_transcript_variant                                                                       1
	```
???+ note "FILTER"
	Copied from input VCF. This includes filters implemented directly by the variant caller and other external software used in the DNA-Seq pipeline. See below for additional details.  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	PASS   1712
	```
???+ note "Existing_variation"
	Known identifier of existing variation  
	
	Not null: 710 (41.47%)  
	Unique: 710  
	```
	Value                     Count
	-------------------------------
	rs1156390944                  1
	COSV53531570,COSV53538628     1
	rs74644444                    1
	rs11436843                    1
	rs1259996008                  1
	rs769501178                   1
	rs202197598                   1
	rs10956331                    1
	rs769490047                   1
	rs35033844                    1
	COSV61979313                  1
	rs140437596                   1
	rs113262451                   1
	rs111663056                   1
	rs1573258838                  1
	rs63750862                    1
	rs35093904                    1
	rs3981193                     1
	rs1571900564                  1
	rs1425329988                  1
	rs57140955                    1
	COSV57766286                  1
	COSV100710177                 1
	rs139800202                   1
	rs984589504                   1
	rs1476511891                  1
	rs756804590                   1
	COSV53772700                  1
	rs35531802                    1
	rs1357094628                  1
	...
	```
???+ note "IMPACT"
	The impact modifier for the consequence type  
	
	Not null: 1712 (100.0%)  
	Unique: 4  
	```
	Value    Count
	--------------
	MODIFIER  1174
	MODERATE   337
	LOW        167
	HIGH        34
	```
???+ note "ba1"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 1  
	```
	Value Count
	-----------
	false  1703
	```
???+ note "LOH_raw"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 2  
	```
	Value Count
	-----------
	false  1291
	true    343
	```
???+ note "PolyPhen"
	The PolyPhen prediction and/or score  
	
	Not null: 336 (19.63%)  
	Unique: 190  
	```
	Value                    Count
	------------------------------
	probably_damaging(1)        19
	benign(0)                   16
	probably_damaging(0.999)    15
	benign(0.003)               13
	benign(0.001)                8
	probably_damaging(0.998)     8
	probably_damaging(0.987)     7
	probably_damaging(0.997)     7
	benign(0.005)                6
	benign(0.007)                5
	probably_damaging(0.995)     5
	benign(0.009)                5
	probably_damaging(0.996)     4
	benign(0.011)                4
	benign(0.015)                4
	probably_damaging(0.993)     4
	probably_damaging(0.986)     3
	benign(0.045)                3
	benign(0.101)                3
	possibly_damaging(0.85)      3
	benign(0.01)                 3
	probably_damaging(0.935)     2
	benign(0.022)                2
	benign(0.05)                 2
	possibly_damaging(0.836)     2
	probably_damaging(0.988)     2
	probably_damaging(0.93)      2
	probably_damaging(0.971)     2
	probably_damaging(0.964)     2
	possibly_damaging(0.603)     2
	...
	```
???+ note "SYMBOL_SOURCE"
	The source of the gene symbol  
	
	Not null: 1550 (90.54%)  
	Unique: 2  
	```
	Value Count
	-----------
	HGNC   1549
	RFAM      1
	```
???+ note "t_GT"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 2  
	```
	Value Count
	-----------
	0/1    1705
	0|1       7
	```
???+ note "dbSNP_RS"
	The rs-IDs from the dbSNP database, 'novel' if not found in any database used, or null if there is no dbSNP record, but it is found in other databases  
	
	Not null: 1621 (94.68%)  
	Unique: 620  
	```
	Value        Count
	------------------
	novel         1002
	rs776856738      1
	rs1156390944     1
	rs1727143        1
	rs111510050      1
	rs67311944       1
	rs745712941      1
	rs149148104      1
	rs74644444       1
	rs373485058      1
	rs938212729      1
	rs138597569      1
	rs765190810      1
	rs11436843       1
	rs1259996008     1
	rs769501178      1
	rs200590016      1
	rs57540955       1
	rs1392131339     1
	rs11280691       1
	rs10581092       1
	rs202197598      1
	rs1481401371     1
	rs35906401       1
	rs200610947      1
	rs371278952      1
	rs35105892       1
	rs1018471444     1
	rs533842435      1
	rs80017238       1
	...
	```
???+ note "n_alt_count"
	Read depth supporting the variant allele in normal BAM (cleared in somatic MAF)  
	
	Not null: 1712 (100.0%)  
	Unique: 6  
	```
	Value Count
	-----------
	0      1648
	1        39
	2        12
	3         9
	8         3
	11        1
	```
???+ note "Allele"
	The variant allele used to calculate the consequence  
	
	Not null: 1712 (100.0%)  
	Unique: 56  
	```
	Value        Count
	------------------
	A              621
	T              575
	G              168
	-              150
	C              139
	CC               3
	AG               3
	GA               2
	GG               2
	AC               2
	CT               2
	GTGTGTGTGT       1
	TTC              1
	TAG              1
	TCAA             1
	GAT              1
	ACTTTAAAA        1
	GGATTCTC         1
	CTC              1
	GT               1
	ACACACACACAC     1
	TCTT             1
	AGGCA            1
	CCCCC            1
	AAT              1
	AT               1
	GCCTCA           1
	GTATGTAT         1
	TT               1
	ACT              1
	...
	```
???+ note "STRAND_VEP"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1550 (90.54%)  
	Unique: 2  
	```
	Value Count
	-----------
	1.0     783
	-1.0    767
	```
???+ note "Start_Position"
	Lowest numeric position of the reported variant on the genomic reference sequence. Mutation start coordinate  
	
	Not null: 1712 (100.0%)  
	Unique: 1712  
	```
	Value     Count
	---------------
	202377629     1
	106587941     1
	64803160      1
	152586474     1
	12942148      1
	29838890      1
	42536524      1
	27123970      1
	25433341      1
	204190416     1
	132636011     1
	32906829      1
	48405324      1
	8886947       1
	45085430      1
	83032238      1
	85341756      1
	64767907      1
	23461259      1
	67373588      1
	87460052      1
	41807384      1
	41541087      1
	35090247      1
	88920802      1
	60919814      1
	54188242      1
	34624167      1
	5679976       1
	64466522      1
	...
	```
???+ note "flanking_bps"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 194  
	```
	Value Count
	-----------
	GCC      85
	CGG      58
	CCG      57
	TGT      57
	CGC      53
	GCA      52
	GGC      52
	TGG      51
	GGG      51
	CCC      48
	CCA      44
	AGG      44
	TGA      44
	ACA      43
	GCG      41
	TCC      41
	TGC      41
	ACG      39
	GCT      38
	AGC      37
	GGA      35
	CCT      34
	ACT      31
	TCG      29
	ACC      28
	GGT      28
	TCT      28
	CGT      28
	TCA      27
	AGT      26
	...
	```
???+ note "HGNC_ID"
	Gene identifier from the HUGO Gene Nomenclature Committee if applicable  
	
	Not null: 1549 (90.48%)  
	Unique: 1412  
	```
	Value      Count
	----------------
	HGNC:20751     8
	HGNC:15723     7
	HGNC:28170     4
	HGNC:7512      4
	HGNC:26088     3
	HGNC:19656     3
	HGNC:8591      3
	HGNC:15784     3
	HGNC:7133      3
	HGNC:1388      3
	HGNC:50801     3
	HGNC:29945     3
	HGNC:9650      3
	HGNC:11276     2
	HGNC:271       2
	HGNC:1850      2
	HGNC:7679      2
	HGNC:27400     2
	HGNC:24567     2
	HGNC:13922     2
	HGNC:23375     2
	HGNC:190       2
	HGNC:817       2
	HGNC:11056     2
	HGNC:7778      2
	HGNC:24639     2
	HGNC:17871     2
	HGNC:2857      2
	HGNC:54919     2
	HGNC:270       2
	...
	```
???+ note "segment_LOH"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 2  
	```
	Value Count
	-----------
	false  1258
	true    376
	```
???+ note "Chr_stripped"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 24  
	```
	Value Count
	-----------
	1       176
	19      126
	3       101
	17       99
	2        93
	11       91
	7        88
	16       81
	10       73
	5        72
	15       72
	4        70
	12       70
	X        68
	8        68
	6        67
	9        63
	20       59
	14       55
	22       42
	21       31
	13       25
	18       19
	Y         3
	```
???+ note "segment_type"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 3  
	```
	Value      Count
	----------------
	Arm         1381
	Long_focal   218
	Focal         35
	```
???+ note "bs1"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 1  
	```
	Value Count
	-----------
	false  1703
	```
???+ note "chrom_n"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1709 (99.82%)  
	Unique: 23  
	```
	Value Count
	-----------
	1.0     176
	19.0    126
	3.0     101
	17.0     99
	2.0      93
	11.0     91
	7.0      88
	16.0     81
	10.0     73
	5.0      72
	15.0     72
	12.0     70
	4.0      70
	8.0      68
	23.0     68
	6.0      67
	9.0      63
	20.0     59
	14.0     55
	22.0     42
	21.0     31
	13.0     25
	18.0     19
	```
???+ note "cDNA_position"
	Relative position of base pair in the cDNA sequence as a fraction. A '-' symbol is displayed as the numerator if the variant does not appear in cDNA  
	
	Not null: 595 (34.75%)  
	Unique: 543  
	```
	Value Count
	-----------
	41        3
	1036      3
	1281      3
	452       3
	678       3
	647       3
	156       3
	1095      3
	464       2
	403       2
	844       2
	1101      2
	1527      2
	372       2
	2075      2
	825       2
	243       2
	1431      2
	1705      2
	179       2
	1657      2
	1581      2
	642       2
	709       2
	573       2
	544       2
	2604      2
	1074      2
	904       2
	579       2
	...
	```
???+ note "EXON"
	The exon number (out of total number)  
	
	Not null: 595 (34.75%)  
	Unique: 266  
	```
	Value Count
	-----------
	2/2      27
	1/1      25
	3/3      16
	4/4      16
	1/6      14
	1/2      13
	1/3      10
	1/4       9
	2/3       9
	8/8       9
	7/7       8
	5/5       7
	1/11      6
	1/7       6
	1/5       6
	11/11     6
	1/9       6
	4/7       5
	2/4       5
	4/10      5
	2/13      5
	8/9       5
	5/7       5
	13/13     5
	3/4       4
	3/12      4
	10/10     4
	6/6       4
	8/12      4
	4/9       4
	...
	```
???+ note "bp7"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 2  
	```
	Value Count
	-----------
	false  1580
	true    123
	```
???+ note "t_alt_count"
	Read depth supporting the variant allele in tumor BAM  
	
	Not null: 1712 (100.0%)  
	Unique: 71  
	```
	Value Count
	-----------
	4       681
	2       332
	5       158
	3       122
	6       112
	7        41
	8        37
	10       27
	9        27
	11       15
	13       13
	14       11
	12        8
	16        7
	19        7
	18        6
	26        6
	20        6
	15        6
	31        5
	28        4
	34        4
	29        4
	46        4
	35        3
	30        3
	21        3
	24        3
	17        3
	53        3
	...
	```
???+ note "PHENO"
	Indicates if the existing variant is associated with a phenotype, disease or trait (0, 1, or null)  
	
	Not null: 178 (10.4%)  
	Unique: 6  
	```
	Value     Count
	---------------
	1           102
	0,1          66
	1,1           7
	0,1,1         1
	1,1,1,1       1
	1,1,1,1,1     1
	```
???+ note "Transcript_ID"
	Ensembl ID of the transcript affected by the variant  
	
	Not null: 1550 (90.54%)  
	Unique: 1418  
	```
	Value           Count
	---------------------
	ENST00000295888     8
	ENST00000470054     7
	ENST00000675028     4
	ENST00000430580     3
	ENST00000296358     3
	ENST00000301831     3
	ENST00000327283     3
	ENST00000638029     3
	ENST00000278550     3
	ENST00000327134     3
	ENST00000619712     3
	ENST00000301067     3
	ENST00000618007     2
	ENST00000283206     2
	ENST00000308074     2
	ENST00000296422     2
	ENST00000366794     2
	ENST00000245907     2
	ENST00000359568     2
	ENST00000443866     2
	ENST00000250373     2
	ENST00000352385     2
	ENST00000644486     2
	ENST00000307885     2
	ENST00000400546     2
	ENST00000558379     2
	ENST00000252729     2
	ENST00000314393     2
	ENST00000304330     2
	ENST00000297933     2
	...
	```
???+ note "n_GT"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 2  
	```
	Value Count
	-----------
	0/0    1705
	0|0       7
	```
???+ note "ACMG_significance"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 5  
	```
	Value             Count
	-----------------------
	Uncertain          1464
	Likely benign       242
	Benign                3
	Likely pathogenic     2
	Pathogenic            1
	```
???+ note "Protein_position"
	Relative position of affected amino acid in protein. A '-' symbol is displayed as the numerator if the variant does not appear in coding sequence  
	
	Not null: 491 (28.68%)  
	Unique: 380  
	```
	Value Count
	-----------
	7.0       5
	276.0     4
	17.0      4
	108.0     4
	140.0     4
	41.0      3
	26.0      3
	127.0     3
	644.0     3
	247.0     3
	397.0     3
	250.0     3
	448.0     3
	254.0     3
	416.0     3
	36.0      3
	392.0     3
	156.0     3
	2.0       3
	81.0      3
	63.0      3
	319.0     2
	365.0     2
	12.0      2
	23.0      2
	130.0     2
	414.0     2
	100.0     2
	135.0     2
	138.0     2
	...
	```
???+ note "Variant_Classification"
	Translational effect of variant allele  
	
	Not null: 1712 (100.0%)  
	Unique: 17  
	```
	Value                  Count
	----------------------------
	Intron                   811
	Missense_Mutation        336
	IGR                      162
	Silent                   125
	5'Flank                   63
	3'Flank                   56
	3'UTR                     46
	RNA                       30
	5'UTR                     26
	Splice_Region             22
	Nonsense_Mutation         19
	Splice_Site                9
	Frame_Shift_Del            3
	Nonstop_Mutation           1
	Frame_Shift_Ins            1
	In_Frame_Del               1
	Translation_Start_Site     1
	```
???+ note "Matched_Norm_Sample_Barcode"
	Aliquot barcode for the matched normal sample  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value  Count
	------------
	NORMAL  1712
	```
???+ note "c_fraction"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 802 (46.85%)  
	Unique: 518  
	```
	Value              Count
	------------------------
	0.125                 11
	0.0987654320987654     8
	0.111111111111111      8
	0.112676056338028      8
	0.0784313725490196     7
	0.10126582278481       7
	0.1095890410958904     7
	0.0769230769230768     7
	0.1194029850746268     7
	0.1052631578947368     7
	0.1                    7
	0.1333333333333332     6
	0.1212121212121212     6
	0.0930232558139534     6
	0.057142857142857      5
	0.1159420289855072     5
	0.0963855421686746     5
	0.1025641025641024     5
	0.1142857142857142     5
	0.086021505376344      5
	0.074074074074074      5
	0.0952380952380952     5
	0.0869565217391304     5
	0.0816326530612244     5
	0.0888888888888888     4
	0.108108108108108      4
	0.1379310344827585     4
	0.0373831775700934     4
	0.097560975609756      4
	0.0526315789473684     4
	...
	```
???+ note "End_Position"
	Highest numeric genomic position of the reported variant on the genomic reference sequence. Mutation end coordinate  
	
	Not null: 1712 (100.0%)  
	Unique: 1712  
	```
	Value     Count
	---------------
	117529303     1
	63838743      1
	202377629     1
	106587941     1
	64803160      1
	152586474     1
	29838890      1
	42536524      1
	131510046     1
	79555646      1
	27123970      1
	25433341      1
	132636011     1
	32906829      1
	48405324      1
	8886947       1
	45085430      1
	83032238      1
	85341756      1
	64767907      1
	23461259      1
	67373588      1
	87460052      1
	41807384      1
	89737387      1
	35090247      1
	88920802      1
	60919814      1
	54188242      1
	125355216     1
	...
	```
???+ note "Gene"
	Stable Ensembl ID of the affected gene  
	
	Not null: 1550 (90.54%)  
	Unique: 1413  
	```
	Value           Count
	---------------------
	ENSG00000163625     8
	ENSG00000187172     7
	ENSG00000215908     4
	ENSG00000198788     4
	ENSG00000163982     3
	ENSG00000219481     3
	ENSG00000141837     3
	ENSG00000167548     3
	ENSG00000175354     3
	ENSG00000276164     3
	ENSG00000180370     3
	ENSG00000168038     3
	ENSG00000149256     3
	ENSG00000129951     2
	ENSG00000150471     2
	ENSG00000178078     2
	ENSG00000165219     2
	ENSG00000141542     2
	ENSG00000204296     2
	ENSG00000116254     2
	ENSG00000144642     2
	ENSG00000151952     2
	ENSG00000274391     2
	ENSG00000147324     2
	ENSG00000072195     2
	ENSG00000189325     2
	ENSG00000116852     2
	ENSG00000170412     2
	ENSG00000144550     2
	ENSG00000140451     2
	...
	```
???+ note "SIFT"
	The SIFT prediction and/or score, with both given as prediction (score)  
	
	Not null: 333 (19.45%)  
	Unique: 82  
	```
	Value                            Count
	--------------------------------------
	deleterious(0)                      90
	deleterious(0.01)                   33
	tolerated(1)                        13
	deleterious(0.03)                   12
	deleterious(0.02)                   11
	deleterious(0.04)                   10
	tolerated(0.08)                      8
	tolerated(0.13)                      7
	deleterious_low_confidence(0)        7
	deleterious(0.05)                    7
	tolerated(0.05)                      6
	deleterious_low_confidence(0.01)     5
	tolerated(0.06)                      5
	tolerated(0.07)                      5
	tolerated(0.14)                      4
	tolerated(0.1)                       4
	tolerated(0.34)                      4
	tolerated(0.15)                      4
	tolerated(0.21)                      4
	tolerated(0.09)                      4
	tolerated(0.35)                      3
	tolerated(0.11)                      3
	tolerated(0.12)                      3
	tolerated(0.18)                      3
	tolerated(0.23)                      3
	tolerated(0.17)                      3
	tolerated(0.31)                      3
	tolerated(0.25)                      2
	tolerated_low_confidence(0.57)       2
	tolerated(0.24)                      2
	...
	```
???+ note "basic_trash_mutation_filter"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1163 (67.93%)  
	Unique: 1  
	```
	Value Count
	-----------
	PASS   1163
	```
???+ note "pm4"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 2  
	```
	Value Count
	-----------
	false  1702
	true      1
	```
???+ note "Tumor_Sample_Barcode"
	Aliquot barcode for the tumor sample  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value    Count
	--------------
	BG006600  1712
	```
???+ note "Feature"
	Stable Ensembl ID of feature (transcript, regulatory, motif)  
	
	Not null: 1550 (90.54%)  
	Unique: 1418  
	```
	Value           Count
	---------------------
	ENST00000295888     8
	ENST00000470054     7
	ENST00000675028     4
	ENST00000430580     3
	ENST00000296358     3
	ENST00000301831     3
	ENST00000327283     3
	ENST00000638029     3
	ENST00000278550     3
	ENST00000327134     3
	ENST00000619712     3
	ENST00000301067     3
	ENST00000618007     2
	ENST00000283206     2
	ENST00000308074     2
	ENST00000296422     2
	ENST00000366794     2
	ENST00000245907     2
	ENST00000359568     2
	ENST00000443866     2
	ENST00000250373     2
	ENST00000352385     2
	ENST00000644486     2
	ENST00000307885     2
	ENST00000400546     2
	ENST00000558379     2
	ENST00000252729     2
	ENST00000314393     2
	ENST00000304330     2
	ENST00000297933     2
	...
	```
???+ note "BIOTYPE"
	Biotype of transcript  
	
	Not null: 1550 (90.54%)  
	Unique: 12  
	```
	Value                            Count
	--------------------------------------
	protein_coding                    1443
	processed_pseudogene                33
	processed_transcript                30
	unprocessed_pseudogene              15
	lncRNA                              12
	snRNA                                4
	retained_intron                      4
	misc_RNA                             3
	nonsense_mediated_decay              2
	protein_coding_LoF                   2
	unitary_pseudogene                   1
	transcribed_processed_pseudogene     1
	```
???+ note "MaxEntScan_alt"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 67 (3.91%)  
	Unique: 67  
	```
	Value               Count
	-------------------------
	4.244                   1
	7.301                   1
	3.76                    1
	-0.053                  1
	4.523                   1
	-1.612                  1
	4.82                    1
	8.043                   1
	-10.572                 1
	5.058                   1
	11.058                  1
	6.407                   1
	13.28                   1
	3.276                   1
	10.842                  1
	8.932                   1
	-0.269                  1
	10.695                  1
	1.328                   1
	8.704                   1
	6.393                   1
	2.396                   1
	9.791                   1
	-1.5630000000000002     1
	-1.319                  1
	6.8020000000000005      1
	6.622000000000001       1
	10.542                  1
	10.912                  1
	0.715                   1
	...
	```
???+ note "Tumor_Seq_Allele1"
	Primary data genotype for tumor sequencing (discovery) allele 1. A '-' symbol for a deletion represents a variant. A '-' symbol for an insertion represents wild-type allele. Novel inserted sequence for insertion does not include flanking reference bases  
	
	Not null: 1712 (100.0%)  
	Unique: 75  
	```
	Value     Count
	---------------
	C           658
	G           642
	A           110
	-           100
	T            95
	AG            7
	AC            6
	TG            5
	AT            4
	CT            4
	TTTG          3
	ACAC          3
	TGG           2
	TGC           2
	AAT           2
	TT            2
	ACACAC        2
	TC            2
	TCA           2
	GCC           2
	AA            2
	AAG           2
	AAA           2
	GAG           2
	TGT           1
	CC            1
	GTATT         1
	TTTTTGTAT     1
	GCT           1
	CAG           1
	...
	```
???+ note "HGVSc"
	The coding sequence of the variant in HGVS recommended format  
	
	Not null: 1431 (83.59%)  
	Unique: 1416  
	```
	Value                      Count
	--------------------------------
	c.379C>T                       2
	c.121C>A                       2
	c.797G>A                       2
	c.418G>T                       2
	c.1831C>A                      2
	c.861G>T                       2
	c.76C>A                        2
	c.50C>A                        2
	c.321G>T                       2
	c.750C>A                       2
	c.*90C>A                       2
	c.241C>A                       2
	c.*110C>A                      2
	c.51G>T                        2
	c.-11C>A                       2
	c.1593C>A                      1
	c.663G>T                       1
	c.802+6764A>G                  1
	c.1797+47090_1797+47091dup     1
	c.963C>A                       1
	c.1398G>A                      1
	c.457-4444dup                  1
	c.319-28962G>T                 1
	c.1924-7C>A                    1
	c.143-105del                   1
	c.331+12914C>T                 1
	c.301+161C>T                   1
	c.1027-60G>T                   1
	c.189G>T                       1
	c.2776-70G>T                   1
	...
	```
???+ note "segment_altered_copies"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 802 (46.85%)  
	Unique: 3  
	```
	Value Count
	-----------
	1.0     785
	2.0      15
	3.0       2
	```
???+ note "CLIN_SIG"
	Clinical significance of variant from dbSNP as annotated in ClinVar  
	
	Not null: 18 (1.05%)  
	Unique: 6  
	```
	Value                   Count
	-----------------------------
	benign                     11
	likely_pathogenic           2
	uncertain_significance      2
	not_provided                1
	not_provided,pathogenic     1
	likely_benign               1
	```
???+ note "t_ref_count"
	Read depth supporting the reference allele in tumor BAM  
	
	Not null: 1712 (100.0%)  
	Unique: 293  
	```
	Value Count
	-----------
	.       257
	4       102
	3        68
	2        60
	1        35
	0        22
	5        21
	60       21
	15       17
	68       17
	17       16
	16       16
	19       13
	11       13
	41       12
	77       12
	55       12
	50       12
	18       12
	29       12
	65       11
	80       11
	56       11
	7        11
	25       11
	79       11
	54       10
	88       10
	30       10
	67       10
	...
	```
???+ note "HGVS_OFFSET"
	Indicates by how many bases the HGVS notations for this variant have been shifted  
	
	Not null: 4 (0.23%)  
	Unique: 3  
	```
	Value Count
	-----------
	2.0       2
	5.0       1
	1.0       1
	```
???+ note "Match_Norm_Seq_Allele2"
	Matched normal sequencing allele 2  
	
	Not null: 1712 (100.0%)  
	Unique: 75  
	```
	Value     Count
	---------------
	C           658
	G           642
	A           110
	-           100
	T            95
	AG            7
	AC            6
	TG            5
	AT            4
	CT            4
	TTTG          3
	ACAC          3
	TGG           2
	TGC           2
	AAT           2
	TT            2
	ACACAC        2
	TC            2
	TCA           2
	GCC           2
	AA            2
	AAG           2
	AAA           2
	GAG           2
	TGT           1
	CC            1
	GTATT         1
	TTTTTGTAT     1
	GCT           1
	CAG           1
	...
	```
???+ note "Strand"
	Genomic strand of the reported allele. Currently, all variants will report the positive strand: '+'  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	+      1712
	```
???+ note "UID"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1712  
	```
	Value                  Count
	----------------------------
	1_39671905_G_C             1
	4_61998252_C_T             1
	22_37832665_C_G            1
	19_813758_G_T              1
	19_39738330_C_T            1
	22_29044671_A_C            1
	17_45112759_C_A            1
	14_103135312_G_T           1
	6_133891793_C_A            1
	9_136377560_C_A            1
	7_76033286_-_A             1
	2_232522744_C_T            1
	15_34591632_CCTGCCTG_-     1
	11_1097434_C_T             1
	3_9756473_G_T              1
	19_12885386_C_A            1
	6_116480761_-_T            1
	1_21298942_G_T             1
	2_240989768_G_A            1
	20_33187620_C_T            1
	3_48433869_A_G             1
	1_44002865_C_A             1
	X_107775233_C_A            1
	9_128250900_G_A            1
	2_240521766_G_T            1
	8_143813301_C_A            1
	12_64125966_G_T            1
	18_8706265_G_A             1
	4_5051799_C_A              1
	14_24632815_G_T            1
	...
	```
???+ note "n_ref_count"
	Read depth supporting the reference allele in normal BAM (cleared in somatic MAF)  
	
	Not null: 1712 (100.0%)  
	Unique: 231  
	```
	Value Count
	-----------
	.       257
	9       110
	10       76
	11       53
	12       44
	13       39
	14       29
	15       24
	24       20
	54       17
	23       17
	18       16
	33       16
	8        16
	34       15
	71       15
	28       15
	58       15
	41       14
	17       14
	57       14
	29       14
	47       14
	16       14
	65       13
	20       13
	19       13
	49       13
	55       12
	48       12
	...
	```
???+ note "margin_segments"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 3  
	```
	Value   Count
	-------------
	regular   561
	first     558
	last      515
	```
???+ note "segment_cna_status"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 3  
	```
	Value    Count
	--------------
	Neutral   1156
	Deletion   330
	Gain       148
	```
???+ note "LOH"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 2  
	```
	Value Count
	-----------
	false  1293
	true    341
	```
???+ note "LOH_VAF_all_mutated"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 3  
	```
	Value              Count
	------------------------
	0.46                1156
	0.2987012987012987   330
	0.5609756097560976   148
	```
???+ note "APPRIS"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1408 (82.24%)  
	Unique: 7  
	```
	Value Count
	-----------
	P1      988
	P2      181
	P4      133
	P3       85
	A2       12
	A1        6
	P5        3
	```
???+ note "variant_qual"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	.      1712
	```
???+ note "segment_LPP"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 142 (8.29%)  
	Unique: 92  
	```
	Value             Count
	-----------------------
	-9.07190651746304     5
	-9.28409710650905     5
	-9.15490411548312     4
	-10.8962070653975     4
	-9.21091982238824     4
	-11.4376589542675     3
	-17.8342238653693     3
	-12.0527325377391     3
	-13.555693302494      3
	-10.3618308973346     3
	-12.7602747884744     3
	-11.6785588797242     3
	-10.045163488209      3
	-10.2635859628957     3
	-14.4458304944582     3
	-9.28063110686587     2
	-9.93055870530386     2
	-12.6734926690347     2
	-9.08480992229895     2
	-10.4522823342711     2
	-10.0486294878521     2
	-9.46628927564115     2
	-9.0754139559751      2
	-10.0063684425486     2
	-10.0179620379075     2
	-14.4492964941014     2
	-10.1089196233689     2
	-9.08134392265578     2
	-9.85423514552193     1
	-12.7568087888312     1
	...
	```
???+ note "t_depth"
	Read depth across this locus in tumor BAM  
	
	Not null: 1712 (100.0%)  
	Unique: 298  
	```
	Value Count
	-----------
	6       117
	5       113
	4       102
	3        50
	7        37
	10       24
	8        21
	19       17
	64       16
	60       15
	33       15
	21       15
	23       14
	22       14
	15       14
	13       14
	27       14
	9        14
	70       14
	67       13
	12       13
	11       13
	81       13
	66       12
	79       12
	37       12
	54       12
	56       11
	73       11
	71       11
	...
	```
???+ note "segment_adjusted_ratio"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 142 (8.29%)  
	Unique: 56  
	```
	Value             Count
	-----------------------
	0.989791808251004     9
	1.22895673259625      7
	0.981361931741426     6
	0.798797577722251     6
	1.01937816187025      6
	1.00461151629276      4
	0.966493871292542     4
	1.02815539091465      4
	0.760713201845149     4
	1.02264066844321      4
	1.00392563662154      4
	1.02484561523681      4
	1.02662306616192      3
	0.96846325273204      3
	1.00333439704026      3
	1.02265011465718      3
	1.02214566629541      3
	1.00238980717816      3
	1.26260019405095      3
	0.987096474063036     3
	1.02812126477793      3
	1.21816261715017      3
	1.0393949444095       3
	1.22254741633389      3
	0.791552942822643     3
	0.797864887540961     2
	0.971374002297454     2
	0.986576678275942     2
	0.790972138405849     2
	1.00779433229493      2
	...
	```
???+ note "HS_pos"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1712  
	```
	Value             Count
	-----------------------
	SEC22A_123245543      1
	OTOGL_80302353        1
	FPGS_127813285        1
	PRORP_35149878        1
	RFX6_116877603        1
	TENT4A_6752946        1
	ELOBP2_130032989      1
	MANEAL_37794491       1
	CEACAM3_41807384      1
	CRYBG2_26336094       1
	ARHGAP44_12931842     1
	KANK3_8335086         1
	DRC7_57702094         1
	CCDC40_80047144       1
	DGKK_50371741         1
	USH1C_17533508        1
	RBFOX3_79555644       1
	PRDM13_99607110       1
	WSB1_27294483         1
	ASB7_100612022        1
	VPS50_93358247        1
	TNNI3K_74394816       1
	OR8G2P_124225071      1
	NECTIN2_44871854      1
	ASMT_1616196          1
	CROCCP3_16486684      1
	Unknown_9723264       1
	NMNAT1P5_59965709     1
	THUMPD2_39757279      1
	CIRBP_1272491         1
	...
	```
???+ note "Entrez_Gene_Id"
	Entrez gene ID (an integer). '0' is used for regions that do not correspond to a gene region or Ensembl ID  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	0      1712
	```
???+ note "bp4"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 2  
	```
	Value Count
	-----------
	false  1585
	true    118
	```
???+ note "IS_HOTSPOT"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1 (0.06%)  
	Unique: 1  
	```
	Value Count
	-----------
	true      1
	```
???+ note "FFPE_PASS"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 120 (7.01%)  
	Unique: 1  
	```
	Value Count
	-----------
	PASS    120
	```
???+ note "Tumor_VAF"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 578  
	```
	Value              Count
	------------------------
	1.0                  122
	0.3333333333333333   103
	0.4                   71
	0.5                   60
	0.6666666666666666    42
	0.8                   18
	0.2857142857142857    18
	0.0625                15
	0.0714285714285714    14
	0.2                   12
	0.6                   12
	0.0769230769230769    11
	0.75                  11
	0.0666666666666666    10
	0.1428571428571428    10
	0.0689655172413793     9
	0.0454545454545454     9
	0.0555555555555555     9
	0.0384615384615384     9
	0.1904761904761904     9
	0.0493827160493827     9
	0.056338028169014      9
	0.8333333333333334     9
	0.0481927710843373     9
	0.0909090909090909     9
	0.074074074074074      9
	0.2105263157894736     9
	0.1052631578947368     9
	0.0597014925373134     8
	0.0677966101694915     8
	...
	```
???+ note "ACMG_source"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 2  
	```
	Value   Count
	-------------
	bg_acmg  1703
	clinvar     9
	```
???+ note "HGVSp"
	The protein sequence of the variant in HGVS recommended format. 'p.=' signifies no change in the protein  
	
	Not null: 491 (28.68%)  
	Unique: 489  
	```
	Value        Count
	------------------
	p.Arg266His      2
	p.Leu127=        2
	p.Tyr36Cys       1
	p.Asn1354Lys     1
	p.Arg98Ser       1
	p.Ala149Ser      1
	p.Ser196Ile      1
	p.Gly1133=       1
	p.Val165Leu      1
	p.Leu85=         1
	p.Leu247=        1
	p.Ala282Ser      1
	p.Val230Leu      1
	p.Ala456Val      1
	p.Leu318=        1
	p.Arg808Gly      1
	p.Thr2=          1
	p.Arg258Cys      1
	p.Pro555Ala      1
	p.Pro7=          1
	p.Glu644Ter      1
	p.Gly505Ter      1
	p.Gly996Ter      1
	p.Ala1608Ser     1
	p.Ala382Ser      1
	p.Lys1051Asn     1
	p.Cys783Phe      1
	p.Arg139Leu      1
	p.Ala303Gly      1
	p.Gly589Val      1
	...
	```
???+ note "MaxEntScan_ref"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 67 (3.91%)  
	Unique: 66  
	```
	Value              Count
	------------------------
	8.312000000000001      2
	8.04                   1
	10.655                 1
	9.892                  1
	8.463                  1
	-9.8                   1
	9.104                  1
	6.746                  1
	10.284                 1
	10.203                 1
	7.9220000000000015     1
	5.8610000000000015     1
	9.179                  1
	10.445                 1
	5.484                  1
	9.018                  1
	8.568999999999999      1
	12.249                 1
	5.295                  1
	9.048                  1
	5.645                  1
	12.082                 1
	12.855                 1
	8.837                  1
	7.326                  1
	8.811                  1
	3.275                  1
	8.559                  1
	8.012                  1
	11.247                 1
	...
	```
???+ note "LOH_VAF_one_wt"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 3  
	```
	Value              Count
	------------------------
	0.23                1156
	0.0                  330
	0.3739837398373984   148
	```
???+ note "GENE_PHENO"
	Indicates if the gene that the variant maps to is associated with a phenotype, disease or trait (0, 1, or null)  
	
	Not null: 505 (29.5%)  
	Unique: 1  
	```
	Value Count
	-----------
	1.0     505
	```
???+ note "Alternate_Allele"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 56  
	```
	Value        Count
	------------------
	A              621
	T              575
	G              168
	-              150
	C              139
	CC               3
	AG               3
	GA               2
	GG               2
	AC               2
	CT               2
	GTGTGTGTGT       1
	TTC              1
	TAG              1
	TCAA             1
	GAT              1
	ACTTTAAAA        1
	GGATTCTC         1
	CTC              1
	GT               1
	ACACACACACAC     1
	TCTT             1
	AGGCA            1
	CCCCC            1
	AAT              1
	AT               1
	GCCTCA           1
	GTATGTAT         1
	TT               1
	ACT              1
	...
	```
???+ note "in_low_complexity_region"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 52 (3.04%)  
	Unique: 1  
	```
	Value Count
	-----------
	PASS     52
	```
???+ note "Clonality_status"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 3  
	```
	Value                    Count
	------------------------------
	Clonal                     972
	Subclonal                  662
	Unable to call clonality    78
	```
???+ note "HGVSp_Short"
	Same as the HGVSp column, but using 1-letter amino-acid codes  
	
	Not null: 500 (29.21%)  
	Unique: 498  
	```
	Value         Count
	-------------------
	p.R266H           2
	p.L127=           2
	p.Q276K           1
	p.L108=           1
	p.R463S           1
	p.T221=           1
	p.R202H           1
	p.M403L           1
	p.A282S           1
	p.M59I            1
	p.Q254*           1
	p.W386L           1
	p.S1031N          1
	p.L460=           1
	p.A356V           1
	p.L335V           1
	p.V27G            1
	p.V140F           1
	p.P646=           1
	p.R26=            1
	p.D108H           1
	p.A199=           1
	p.X468_splice     1
	p.A135S           1
	p.E243*           1
	p.I10=            1
	p.P5=             1
	p.T217M           1
	p.R426W           1
	p.L81M            1
	...
	```
???+ note "DISTANCE"
	Shortest distance from the variant to transcript  
	
	Not null: 119 (6.95%)  
	Unique: 118  
	```
	Value  Count
	------------
	52.0       2
	586.0      1
	3009.0     1
	67.0       1
	2342.0     1
	4988.0     1
	3296.0     1
	4568.0     1
	2164.0     1
	112.0      1
	4537.0     1
	64.0       1
	471.0      1
	762.0      1
	4179.0     1
	151.0      1
	736.0      1
	4921.0     1
	2283.0     1
	1407.0     1
	4373.0     1
	4.0        1
	54.0       1
	1458.0     1
	733.0      1
	2465.0     1
	1056.0     1
	2880.0     1
	199.0      1
	4684.0     1
	...
	```
???+ note "Match_Norm_Seq_Allele1"
	Primary data genotype. Matched normal sequencing allele 1. A '-' symbol for a deletion represents a variant. A '-' symbol for an insertion represents wild-type allele. Novel inserted sequence for insertion does not include flanking reference bases (cleared in somatic MAF)  
	
	Not null: 1712 (100.0%)  
	Unique: 75  
	```
	Value     Count
	---------------
	C           658
	G           642
	A           110
	-           100
	T            95
	AG            7
	AC            6
	TG            5
	AT            4
	CT            4
	TTTG          3
	ACAC          3
	TGG           2
	TGC           2
	AAT           2
	TT            2
	ACACAC        2
	TC            2
	TCA           2
	GCC           2
	AA            2
	AAG           2
	AAA           2
	GAG           2
	TGT           1
	CC            1
	GTATT         1
	TTTTTGTAT     1
	GCT           1
	CAG           1
	...
	```
???+ note "MaxEntScan_diff"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 67 (3.91%)  
	Unique: 62  
	```
	Value               Count
	-------------------------
	8.597999999999999       3
	8.504                   3
	8.064                   2
	1.214                   1
	1.617                   1
	1.272                   1
	-0.051                  1
	0.7709999999999999      1
	2.257                   1
	0.392                   1
	-0.201                  1
	7.124                   1
	-1.163                  1
	-0.056                  1
	3.745                   1
	-1.204                  1
	-0.194                  1
	-0.315                  1
	-0.603                  1
	-0.878                  1
	2.88                    1
	-1.97                   1
	2.215                   1
	1.264                   1
	-1.4380000000000002     1
	0.879                   1
	0.383                   1
	4.314                   1
	2.556                   1
	8.182                   1
	...
	```
???+ note "Sample"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value    Count
	--------------
	BG006600  1712
	```
???+ note "Chromosome"
	The affected chromosome (chr1)  
	
	Not null: 1712 (100.0%)  
	Unique: 24  
	```
	Value Count
	-----------
	chr1    176
	chr19   126
	chr3    101
	chr17    99
	chr2     93
	chr11    91
	chr7     88
	chr16    81
	chr10    73
	chr5     72
	chr15    72
	chr12    70
	chr4     70
	chr8     68
	chrX     68
	chr6     67
	chr9     63
	chr20    59
	chr14    55
	chr22    42
	chr21    31
	chr13    25
	chr18    19
	chrY      3
	```
???+ note "LDT_PASS"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 53 (3.1%)  
	Unique: 1  
	```
	Value Count
	-----------
	PASS     53
	```
???+ note "Codons"
	The alternative codons with the variant base in uppercase  
	
	Not null: 491 (28.68%)  
	Unique: 202  
	```
	Value   Count
	-------------
	gCc/gTc    11
	ctG/ctT    11
	Gcc/Tcc    11
	Cgg/Agg    10
	cGg/cTg     9
	Cgc/Agc     9
	gGc/gAc     8
	Ggc/Tgc     8
	ccG/ccT     7
	Cag/Aag     7
	gaC/gaA     6
	ccC/ccA     6
	Gac/Tac     6
	gcG/gcT     6
	cGc/cTc     6
	aGc/aTc     5
	Ccc/Acc     5
	cCg/cAg     5
	ggG/ggT     5
	tcG/tcT     5
	Gtg/Ttg     5
	Ctg/Atg     5
	aaC/aaA     5
	Gag/Tag     4
	Gga/Aga     4
	cGc/cAc     4
	Ccg/Tcg     4
	acC/acA     4
	gCc/gAc     4
	atC/atA     4
	...
	```
???+ note "Feature_type"
	Type of feature. Currently one of Transcript, RegulatoryFeature, MotifFeature (or blank)  
	
	Not null: 1550 (90.54%)  
	Unique: 1  
	```
	Value      Count
	----------------
	Transcript  1550
	```
???+ note "segment_total_copies"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1642 (95.91%)  
	Unique: 6  
	```
	Value Count
	-----------
	2.0    1160
	1.0     331
	3.0     148
	5.0       1
	6.0       1
	8.0       1
	```
???+ note "variant_id"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	.      1712
	```
???+ note "Variant_Type"
	Type of mutation. TNP (tri-nucleotide polymorphism) is analogous to DNP (di-nucleotide polymorphism) but for three consecutive nucleotides. ONP (oligo-nucleotide polymorphism) is analogous to TNP but for consecutive runs of four or more (SNP, DNP, TNP, ONP, INS, DEL, or Consolidated)  
	
	Not null: 1712 (100.0%)  
	Unique: 5  
	```
	Value Count
	-----------
	SNP    1455
	DEL     150
	INS     100
	DNP       4
	TNP       3
	```
???+ note "pm2"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 2  
	```
	Value Count
	-----------
	true   1544
	false   159
	```
???+ note "CDS_position"
	Relative position of base pair in coding sequence. A '-' symbol is displayed as the numerator if the variant does not appear in coding sequence  
	
	Not null: 491 (28.68%)  
	Unique: 442  
	```
	Value Count
	-----------
	826       3
	76        3
	379       3
	750       3
	241       3
	121       3
	297       2
	1191      2
	1084      2
	387       2
	184       2
	253       2
	1093      2
	34        2
	20        2
	740       2
	21        2
	50        2
	797       2
	1536      2
	418       2
	1343      2
	969       2
	663       2
	1930      2
	1369      2
	151       2
	51        2
	1246      2
	321       2
	...
	```
???+ note "DOMAINS"
	The source and identifier of any overlapping protein domains  
	
	Not null: 487 (28.45%)  
	Unique: 481  
	```
	Value                                                                                                   Count
	-------------------------------------------------------------------------------------------------------------
	CDD:cd16005,Gene3D:1.20.1070.10,Pfam:PF00002,Superfamily:SSF81321,PROSITE_profiles:PS50261,PANTHER:P...     2
	AFDB-ENSP_mappings:AF-Q96MH2-F1.A,PANTHER:PTHR13469,PANTHER:PTHR13469:SF3,MobiDB_lite:mobidb-lite           2
	AFDB-ENSP_mappings:AF-Q7RTM1-F1.A,PANTHER:PTHR21522,PANTHER:PTHR21522:SF60                                  2
	MobiDB_lite:mobidb-lite,MobiDB_lite:mobidb-lite                                                             2
	Gene3D:3.90.810.10,AFDB-ENSP_mappings:AF-Q13177-F1.A,Pfam:PF00786,PANTHER:PTHR45832,PANTHER:PTHR4583...     2
	AFDB-ENSP_mappings:AF-Q96SE0-F1.A,PIRSF:PIRSF005211,PANTHER:PTHR10794,PANTHER:PTHR10794:SF60                2
	AFDB-ENSP_mappings:AF-Q6ZMJ2-F1.A,HAMAP:MF_03070,PANTHER:PTHR19331,PANTHER:PTHR19331:SF447                  1
	Gene3D:3.40.1090.10,Pfam:PF01734,PROSITE_profiles:PS51635,PANTHER:PTHR14226,PANTHER:PTHR14226:SF26,S...     1
	Pfam:PF15037,PANTHER:PTHR15583,PANTHER:PTHR15583:SF10                                                       1
	AFDB-ENSP_mappings:AF-Q32M88-F1.A,PANTHER:PTHR11051:SF8,PANTHER:PTHR11051                                   1
	PANTHER:PTHR46019:SF5,PANTHER:PTHR46019,Gene3D:3.15.10.10,Pfam:PF01273,SMART:SM00328,Superfamily:SSF...     1
	AFDB-ENSP_mappings:AF-Q15772-F1.A,AFDB-ENSP_mappings:AF-Q15772-F2.A,AFDB-ENSP_mappings:AF-Q15772-F3....     1
	AFDB-ENSP_mappings:AF-P23975-F1.A,Pfam:PF00209,PROSITE_profiles:PS50267,PANTHER:PTHR11616,PANTHER:PT...     1
	Gene3D:3.40.50.410,AFDB-ENSP_mappings:AF-P12110-F1.A,Pfam:PF00092,PROSITE_profiles:PS50234,PANTHER:P...     1
	AFDB-ENSP_mappings:AF-Q96FB5-F1.A,Coiled-coils_(Ncoils):Coil,Pfam:PF13679,PANTHER:PTHR12496,PANTHER:...     1
	Gene3D:3.30.50.10,PROSITE_profiles:PS51030,PANTHER:PTHR48092,PANTHER:PTHR48092:SF23,Superfamily:SSF5...     1
	AFDB-ENSP_mappings:AF-Q2M3G4-F1.A,PANTHER:PTHR15012,PANTHER:PTHR15012:SF37                                  1
	AFDB-ENSP_mappings:AF-Q9UGK3-F1.A,CDD:cd13268,PANTHER:PTHR16186:SF11,PANTHER:PTHR16186,Gene3D:2.30.2...     1
	AFDB-ENSP_mappings:AF-Q16352-F1.A,Low_complexity_(Seg):seg,PROSITE_profiles:PS51842,PANTHER:PTHR4565...     1
	PANTHER:PTHR24168,PANTHER:PTHR24168:SF23,MobiDB_lite:mobidb-lite,MobiDB_lite:mobidb-lite                    1
	Gene3D:3.40.50.720,PDB-ENSP_mappings:3mtg.A,PDB-ENSP_mappings:3mtg.B,AFDB-ENSP_mappings:AF-O43865-F1...     1
	AFDB-ENSP_mappings:AF-Q8NBP0-F1.A,PROSITE_profiles:PS50005,PANTHER:PTHR44523,Gene3D:1.25.40.10,SMART...     1
	AFDB-ENSP_mappings:AF-O94888-F1.A,PANTHER:PTHR23322:SF6,PANTHER:PTHR23322,PIRSF:PIRSF037991                 1
	Gene3D:2.10.25.10,PROSITE_profiles:PS50026,PANTHER:PTHR15036,PANTHER:PTHR15036:SF48,SMART:SM00181,Su...     1
	AFDB-ENSP_mappings:AF-Q10571-F1.A,Coiled-coils_(Ncoils):Coil,PANTHER:PTHR15821,MobiDB_lite:mobidb-li...     1
	AFDB-ENSP_mappings:AF-Q9H3T2-F1.A,Low_complexity_(Seg):seg,PANTHER:PTHR11036:SF11,PANTHER:PTHR11036         1
	Gene3D:2.30.30.40,Pfam:PF00018,PROSITE_profiles:PS50002,SMART:SM00326,Superfamily:SSF50044,CDD:cd118...     1
	AFDB-ENSP_mappings:AF-P0CW18-F1.A,CDD:cd00190,Gene3D:2.40.10.10,Pfam:PF00089,SMART:SM00020,Superfami...     1
	Low_complexity_(Seg):seg,PANTHER:PTHR11255:SF43,PANTHER:PTHR11255,MobiDB_lite:mobidb-lite                   1
	AFDB-ENSP_mappings:AF-P05186-F1.A,CDD:cd16012,PANTHER:PTHR11596,PANTHER:PTHR11596:SF84,Pfam:PF00245,...     1
	...
	```
???+ note "Reference_Allele"
	The plus strand reference allele at this position. Includes the deleted sequence for a deletion or '-' for an insertion  
	
	Not null: 1712 (100.0%)  
	Unique: 75  
	```
	Value     Count
	---------------
	C           658
	G           642
	A           110
	-           100
	T            95
	AG            7
	AC            6
	TG            5
	AT            4
	CT            4
	TTTG          3
	ACAC          3
	TGG           2
	TGC           2
	AAT           2
	TT            2
	ACACAC        2
	TC            2
	TCA           2
	GCC           2
	AA            2
	AAG           2
	AAA           2
	GAG           2
	TGT           1
	CC            1
	GTATT         1
	TTTTTGTAT     1
	GCT           1
	CAG           1
	...
	```
???+ note "target_filter"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 540 (31.54%)  
	Unique: 1  
	```
	Value Count
	-----------
	PASS    540
	```
???+ note "pvs1"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 1  
	```
	Value Count
	-----------
	false  1703
	```
???+ note "pp3"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 2  
	```
	Value Count
	-----------
	false  1603
	true    100
	```
???+ note "VAF_PASS"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1230 (71.85%)  
	Unique: 1  
	```
	Value Count
	-----------
	PASS   1230
	```
???+ note "out_of_interest_filter"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	false  1712
	```
???+ note "Hugo_Symbol"
	HUGO symbol for the gene (HUGO symbols are always in all caps). 'Unknown' is used for regions that do not correspond to a gene  
	
	Not null: 1712 (100.0%)  
	Unique: 1414  
	```
	Value    Count
	--------------
	Unknown    162
	WDFY3        8
	BAGE2        7
	CROCCP2      4
	MUC2         4
	TENM4        3
	OTOP1        3
	NBPF1        3
	ULK4         3
	CACNA1A      3
	PTPN2        3
	KMT2D        3
	PAK2         3
	DUX4L20      3
	IGDCC4       2
	MEI4         2
	CHD5         2
	GZMB         2
	RASGEF1C     2
	ATP2B4       2
	ZAN          2
	VPS52        2
	VN1R7P       2
	SPTBN2       2
	CCDC188      2
	LSS          2
	GABPB2       2
	SLC35F3      2
	ZHX2         2
	SRCIN1       2
	...
	```
???+ note "n_depth"
	Read depth across this locus in normal BAM  
	
	Not null: 1712 (100.0%)  
	Unique: 234  
	```
	Value Count
	-----------
	9       112
	10       79
	2        67
	11       57
	3        50
	12       44
	13       43
	4        34
	14       34
	5        27
	15       25
	8        25
	6        24
	24       21
	17       19
	34       18
	30       17
	58       17
	21       17
	18       16
	48       16
	20       16
	28       15
	54       15
	57       14
	22       14
	40       14
	16       14
	23       13
	33       13
	...
	```
???+ note "Canonical_chr"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 2  
	```
	Value Count
	-----------
	true   1709
	false     3
	```
???+ note "max_AF"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	0      1712
	```
???+ note "TSL"
	Transcript support level, which is based on independent RNA analyses  
	
	Not null: 1423 (83.12%)  
	Unique: 5  
	```
	Value Count
	-----------
	1.0    1071
	5.0     216
	2.0     113
	3.0      14
	4.0       9
	```
???+ note "IS_POLYMORPHIC"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	false  1712
	```
???+ note "minor"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 2  
	```
	Value Count
	-----------
	1.0    1258
	0.0     376
	```
???+ note "SOMATIC"
	Somatic status of each ID reported under Existing_variation (0, 1, or null)  
	
	Not null: 162 (9.46%)  
	Unique: 6  
	```
	Value     Count
	---------------
	1            88
	0,1          69
	1,1           2
	0,1,1         1
	0,0,0,0,1     1
	0,1,1,1       1
	```
???+ note "segment_cna_combined"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 4  
	```
	Value    Count
	--------------
	Neutral   1110
	Deletion   330
	Gain       148
	cnLOH       46
	```
???+ note "pm5"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 1  
	```
	Value Count
	-----------
	false  1703
	```
???+ note "CANONICAL"
	A flag (YES) indicating that the VEP-based canonical transcript, the longest translation, was used for this gene. If not, the value is null  
	
	Not null: 1155 (67.46%)  
	Unique: 1  
	```
	Value Count
	-----------
	YES    1155
	```
???+ note "INTRON"
	The intron number (out of total number)  
	
	Not null: 836 (48.83%)  
	Unique: 366  
	```
	Value Count
	-----------
	1/3      19
	3/3      17
	1/4      16
	1/11     16
	2/9      13
	1/2      11
	4/5       9
	2/3       9
	1/6       9
	1/1       9
	2/7       9
	3/9       8
	1/10      8
	5/10      8
	1/8       8
	7/12      7
	5/5       7
	7/8       7
	1/12      7
	2/6       7
	2/5       7
	4/4       7
	2/8       7
	1/9       7
	2/4       6
	7/10      6
	14/14     6
	3/14      6
	3/5       6
	3/6       6
	...
	```
???+ note "SYMBOL"
	The gene symbol  
	
	Not null: 1550 (90.54%)  
	Unique: 1413  
	```
	Value    Count
	--------------
	WDFY3        8
	BAGE2        7
	CROCCP2      4
	MUC2         4
	TENM4        3
	OTOP1        3
	NBPF1        3
	ULK4         3
	CACNA1A      3
	PTPN2        3
	KMT2D        3
	PAK2         3
	DUX4L20      3
	IGDCC4       2
	MEI4         2
	CHD5         2
	GZMB         2
	RASGEF1C     2
	ATP2B4       2
	ZAN          2
	VPS52        2
	VN1R7P       2
	SPTBN2       2
	CCDC188      2
	LSS          2
	GABPB2       2
	SLC35F3      2
	ZHX2         2
	SRCIN1       2
	TRRAP        2
	...
	```
???+ note "ps1"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1703 (99.47%)  
	Unique: 1  
	```
	Value Count
	-----------
	false  1703
	```
???+ note "PUBMED"
	Pubmed ID(s) of publications that cite existing variant  
	
	Not null: 10 (0.58%)  
	Unique: 10  
	```
	Value                                                                                                   Count
	-------------------------------------------------------------------------------------------------------------
	26139146                                                                                                    1
	24988064,25644115                                                                                           1
	22230814                                                                                                    1
	32789750                                                                                                    1
	29062608                                                                                                    1
	31188922                                                                                                    1
	26539891                                                                                                    1
	26619011                                                                                                    1
	25087612,10479481,10598814,12655553,17096675,17935162,23932990,24350308,8268925,21871829,19915519,17...     1
	30008175                                                                                                    1
	```
???+ note "all_effects"
	A semicolon-delimited list of all possible variant effects, sorted by priority ([Symbol,Consequence,HGVSp_Short,Transcript_ID,RefSeq,HGVSc,Impact,Canonical,Sift,PolyPhen,Strand])  
	
	Not null: 1550 (90.54%)  
	Unique: 1518  
	```
	Value                                                                                                   Count
	-------------------------------------------------------------------------------------------------------------
	WDFY3,intron_variant,,ENST00000295888,;RN7SL552P,downstream_gene_variant,,ENST00000462094,;WDFY3,ups...     7
	BAGE2,intron_variant,,ENST00000470054,;BAGE2,intron_variant,,ENST00000474011,;                              4
	BAGE2,intron_variant,,ENST00000470054,;BAGE2,intron_variant,,ENST00000474011,;,regulatory_region_var...     3
	DUX4L20,downstream_gene_variant,,ENST00000619712,;                                                          3
	MUC2,upstream_gene_variant,,ENST00000674892,;MUC2,downstream_gene_variant,,ENST00000675028,;MUC2,non...     3
	RNU1-61P,upstream_gene_variant,,ENST00000516107,;HLA-DRB6,non_coding_transcript_exon_variant,,ENST00...     2
	PRSS1,intron_variant,,ENST00000311737,;PRSS1,intron_variant,,ENST00000486171,;PRSS1,intron_variant,,...     2
	PTPN2,intron_variant,,ENST00000309660,;PTPN2,intron_variant,,ENST00000327283,;PTPN2,intron_variant,,...     2
	NMRK2,downstream_gene_variant,,ENST00000168977,;NMRK2,downstream_gene_variant,,ENST00000593949,;NMRK...     2
	NTSR1,intron_variant,,ENST00000370501,;                                                                     2
	PRELID3A,intron_variant,,ENST00000336990,;PRELID3A,intron_variant,,ENST00000440960,;PRELID3A,intron_...     2
	VN1R7P,downstream_gene_variant,,ENST00000619242,;                                                           2
	FYB1,intron_variant,,ENST00000351578,;FYB1,intron_variant,,ENST00000512982,;FYB1,intron_variant,,ENS...     2
	CCDC188,intron_variant,,ENST00000439765,;ZDHHC8,downstream_gene_variant,,ENST00000320602,;ZDHHC8,dow...     2
	CDRT15P12,upstream_gene_variant,,ENST00000417001,;                                                          2
	NBPF1,intron_variant,,ENST00000430580,;NBPF1,intron_variant,,ENST00000420513,;NBPF1,intron_variant,,...     2
	GAPVD1,intron_variant,,ENST00000297933,;GAPVD1,intron_variant,,ENST00000312123,;GAPVD1,intron_varian...     2
	PCBP3,intron_variant,,ENST00000400304,;PCBP3,intron_variant,,ENST00000400305,;PCBP3,intron_variant,,...     2
	CROCCP2,non_coding_transcript_exon_variant,,ENST00000635081,;CROCCP2,intron_variant,,ENST00000639456...     2
	RASGEF1C,intron_variant,,ENST00000361132,;RASGEF1C,intron_variant,,ENST00000393371,;RASGEF1C,intron_...     2
	PIF1,intron_variant,,ENST00000268043,;PIF1,intron_variant,,ENST00000333425,;PIF1,intron_variant,,ENS...     2
	CACNG6,upstream_gene_variant,,ENST00000252729,;CACNG8,downstream_gene_variant,,ENST00000270458,;CACN...     2
	ALKBH4,missense_variant,p.Arg258Cys,ENST00000292566,;ORAI2,downstream_gene_variant,,ENST00000356387,...     1
	ANK1,missense_variant,p.Gly1855Val,ENST00000289734,;ANK1,missense_variant,p.Gly130Val,ENST0000031421...     1
	FBXO36,intron_variant,,ENST00000283946,;FBXO36,intron_variant,,ENST00000373652,;FBXO36,intron_varian...     1
	FHIP2B,intron_variant,,ENST00000289921,;FHIP2B,non_coding_transcript_exon_variant,,ENST00000488968,;...     1
	SRPX2,intron_variant,,ENST00000373004,;SRPX2,intron_variant,,ENST00000638458,;SRPX2,intron_variant,,...     1
	MGAT4B,intron_variant,,ENST00000292591,;MGAT4B,intron_variant,,ENST00000337755,;MGAT4B,intron_varian...     1
	TXNDC11,missense_variant,p.Ala42Glu,ENST00000283033,;TXNDC11,missense_variant,p.Ala42Glu,ENST0000035...     1
	RYR1,intron_variant,,ENST00000355481,;RYR1,intron_variant,,ENST00000359596,;RYR1,intron_variant,,ENS...     1
	...
	```
???+ note "Conservation"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1575 (92.0%)  
	Unique: 1265  
	```
	Value              Count
	------------------------
	0.305                  8
	0.089                  7
	0.252                  7
	0.171                  6
	0.055                  6
	0.212                  6
	0.365                  6
	0.061                  5
	0.1369999999999999     5
	0.281                  5
	0.335                  5
	7.905                  4
	0.19                   4
	0.347                  4
	0.516                  4
	10.003                 4
	0.121                  4
	7.568                  4
	-0.504                 4
	-0.057                 3
	-0.373                 3
	0.147                  3
	-0.514                 3
	0.123                  3
	-1.027                 3
	-0.107                 3
	-0.79                  3
	-0.586                 3
	0.229                  3
	0.187                  3
	...
	```
???+ note "Exon_Number"
	The exon number (out of total number)  
	
	Not null: 595 (34.75%)  
	Unique: 266  
	```
	Value Count
	-----------
	2/2      27
	1/1      25
	3/3      16
	4/4      16
	1/6      14
	1/2      13
	1/3      10
	1/4       9
	2/3       9
	8/8       9
	7/7       8
	5/5       7
	1/11      6
	1/7       6
	1/5       6
	11/11     6
	1/9       6
	4/7       5
	2/4       5
	4/10      5
	2/13      5
	8/9       5
	5/7       5
	13/13     5
	3/4       4
	3/12      4
	10/10     4
	6/6       4
	8/12      4
	4/9       4
	...
	```
???+ note "Normal_VAF"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 52  
	```
	Value              Count
	------------------------
	0.0                 1648
	0.05                   3
	0.0526315789473684     3
	0.0434782608695652     2
	0.0714285714285714     2
	0.074074074074074      2
	0.0053763440860215     2
	0.0416666666666666     2
	0.02                   2
	0.1428571428571428     2
	0.0123456790123456     2
	0.1111111111111111     2
	0.0037359900373599     1
	0.0030959752321981     1
	0.0857142857142857     1
	0.005813953488372      1
	0.0689655172413793     1
	0.0476190476190476     1
	0.0043859649122807     1
	0.0575916230366492     1
	0.0303030303030303     1
	0.0120481927710843     1
	0.1764705882352941     1
	0.0144927536231884     1
	0.03125                1
	0.003731343283582      1
	0.0229885057471264     1
	0.0061728395061728     1
	0.0204081632653061     1
	0.018348623853211      1
	...
	```
???+ note "total"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1634 (95.44%)  
	Unique: 3  
	```
	Value Count
	-----------
	2.0    1156
	1.0     330
	3.0     148
	```
???+ note "Center"
	One or more genome sequencing center reporting the variant  
	
	Not null: 1712 (100.0%)  
	Unique: 1  
	```
	Value Count
	-----------
	.      1712
	```
???+ note "LOH_comment"
	!!! warning "No definition, see [https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure](https://docs.gdc.cancer.gov/Data/File_Formats/MAF_Format/#protected-maf-file-structure)"  
	
	Not null: 1712 (100.0%)  
	Unique: 4  
	```
	Value          Count
	--------------------
	calculated       965
	subclonal        662
	not calculated    78
	oncogene           7
	```
