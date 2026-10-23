
const papers = [
  {date:'2026-10-22',arxivDate:'2026-10-22',year:2026,category:'models',title:'IQuest-Q1: Advancing Foundation Capabilities for Agentic CLI Systems',authors:'IQuest Research · <b>Wei Zhang</b> (Core Contributor)',venue:'Technical report · 2026',preprint:true,url:'https://arxiv.org/abs/2610.30949',code:'https://github.com/IQuestLab/IQuest-Q1',resources:[{label:'Model (HF)',url:'https://huggingface.co/IQuestLab/IQuest-Q1'},{label:'Project',url:'https://iquestlab.github.io/'}],summary:'An open-weight MoE foundation model for agentic CLI systems, combining staged pre-training and mid-training with SFT, environment-centered RL, multi-teacher on-policy distillation, and model merging.'},
  {date:'2026-03-17',year:2026,category:'models',title:'IQuest-Coder-V1 Technical Report',authors:'Jian Yang, <b>Wei Zhang</b>, Shawn Guo, et al.',venue:'Technical report · 2026',preprint:true,url:'https://arxiv.org/abs/2603.16733',code:'https://github.com/IQuestLab/IQuest-Coder-V1',summary:'A code-model family connecting code intelligence, reasoning, and agentic software engineering. The training pipeline combines code-focused learning with instruction and thinking post-training.'},
  {date:'2026-04-03',year:2026,category:'models',title:'InCoder-32B-Thinking: Industrial Code World Model for Thinking',authors:'Jian Yang, <b>Wei Zhang</b>, Jiajun Wu, et al.',venue:'EMNLP 2026 · Main',url:'https://arxiv.org/abs/2604.03144',summary:'Studies industrial code reasoning with a learned code world model, using execution-grounded trajectories to connect code, state, and feedback.'},
  {date:'2026-07',year:2026,category:'models',title:'LoopCoder: Scaling Code Intelligence via Looped Language Models',authors:'Jian Yang, <b>Wei Zhang</b>, Shawn Guo, et al.',venue:'Findings of ACL 2026',url:'https://aclanthology.org/2026.findings-acl.796/',summary:'Explores looped language models as a route to scaling code intelligence and allocating computation beyond a conventional single-pass architecture.'},
  {date:'2026-07',year:2026,category:'evaluation',title:'V-GameGym: Visual Game Generation for Code Large Language Models',authors:'<b>Wei Zhang</b>, Jian Yang, Renshuai Tao, et al.',venue:'Findings of ACL 2026',url:'https://aclanthology.org/2026.findings-acl.276/',summary:'A visual game-generation benchmark combining executable environments with multimodal assessment. It evaluates not only code, but also the rendered interface and dynamic interaction.'},
  {date:'2026-05-01',year:2026,category:'agents',title:'Large-Scale Terminal Agentic Trajectory Generation from Dockerized Environments',authors:'Siwei Wu, Yizhi Li, Yuyang Song, <b>Wei Zhang</b>, et al.',venue:'ICML 2026',distinction:'Spotlight',url:'https://openreview.net/forum?id=PeFSCRulgy',summary:'Builds terminal-agent training experience from reproducible Docker environments, pairing tasks with executable environments and verification.'},
  {date:'2026-07',year:2026,category:'agents',title:'From Imitation to Discrimination: Progressive Curriculum Learning for Robust Web Navigation',authors:'Chuang Peng*, <b>Wei Zhang*</b>, Renshuai Tao, Xinhao Zhang, Jian Yang',venue:'Findings of ACL 2026',url:'https://aclanthology.org/2026.findings-acl.356/',summary:'Progresses from imitation to distinguishing difficult action alternatives. Preference learning and reinforcement learning improve action selection for web navigation.'},
  {date:'2026-08-31',year:2026,category:'agents',title:'WebWorld: The Browser as a World Model for Self-Improving Web Code',authors:'Jiajun Wu, Jian Yang, Yaxin Du, <b>Wei Zhang</b>, et al.',venue:'EMNLP 2026 · Main',url:'https://arxiv.org/abs/2608.30530',summary:'Uses the browser as an executable environment for web-code improvement. Proposed changes are checked through re-execution before being retained as training experience.'},
  {date:'2025-12-27',year:2026,category:'evaluation',title:'M²G-Eval: Enhancing and Evaluating Multi-granularity Multilingual Code Generation',authors:'Fanglin Xu*, <b>Wei Zhang*</b>, Jian Yang, et al.',venue:'EMNLP 2026 · Main',url:'https://arxiv.org/abs/2512.22628',summary:'Evaluates multilingual code generation at class, function, block, and line granularity, broadening evaluation beyond isolated function-level tasks.'},
  {date:'2026-03-17',year:2026,category:'models',title:'InCoder-32B: Code Foundation Model for Industrial Scenarios',authors:'Jian Yang, <b>Wei Zhang</b>, Jiajun Wu, et al.',venue:'Technical report · 2026',preprint:true,url:'https://arxiv.org/abs/2603.16790',summary:'A code foundation model designed for industrial programming scenarios, emphasizing practical code understanding and generation.'},
  {date:'2026-06-16',year:2026,category:'models',title:'LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling',authors:'Jian Yang, Shawn Guo, <b>Wei Zhang</b>, et al.',venue:'arXiv · 2026',preprint:true,url:'https://arxiv.org/abs/2606.18023',summary:'A separate follow-up to LoopCoder that investigates efficient test-time computation scaling. This preprint is listed independently from the ACL 2026 paper.'},
  {date:'2026-04-21',year:2026,category:'agents',title:'A Self-Evolving Framework for Efficient Terminal Agents via Observational Context Compression',authors:'Jincheng Ren, Siwei Wu, Yizhi Li, Kang Zhu, Shu Xu, Boyu Feng, Ruibin Yuan, <b>Wei Zhang</b>, Riza Batista-Navarro, Jian Yang, Chenghua Lin',venue:'NeurIPS 2026',url:'https://arxiv.org/abs/2604.19572',summary:'TACO evolves observation-compression rules from terminal-agent experience and reuses validated rules across tasks, while keeping the underlying model weights fixed.'},
  {date:'2026-10-02',year:2026,category:'models',title:'Behavior Pack Optimization for Video MLLM Post-Training',authors:'Zhaolu Kang, Shiyu Liu, Tailong Luo, <b>Wei Zhang</b>, et al.',venue:'NeurIPS 2026',url:'https://arxiv.org/abs/2610.03141',summary:'Studies behavior-pack optimization for the post-training of video multimodal language models.'},
  {date:'2025-11',year:2025,category:'agents',title:'Turning the Tide: Repository-based Code Reflection',authors:'<b>Wei Zhang</b>, Jian Yang, Jiaxi Yang, Ya Wang, Zhoujun Li, et al.',venue:'Findings of EMNLP 2025',url:'https://aclanthology.org/2025.findings-emnlp.377/',summary:'Brings repository context, execution errors, and iterative repair into training and evaluation. The work examines whether a model can recover after an initial failed implementation.'},
  {date:'2025-11',year:2025,category:'evaluation',title:'CodeArena: Evaluating and Aligning CodeLLMs on Human Preference',authors:'Jian Yang, Jiaxi Yang, <b>Wei Zhang</b>, et al.',venue:'EMNLP 2025',url:'https://aclanthology.org/2025.emnlp-main.489/',summary:'Studies practical coding requests and preference alignment, complementing execution-based correctness with the quality and usefulness of the response.'},
  {date:'2025-02-18',year:2025,category:'evaluation',title:'SimpleVQA: Multimodal Factuality Evaluation for Multimodal Large Language Models',authors:'Xianfu Cheng*, <b>Wei Zhang*</b>, Shiwei Zhang*, Jian Yang*, et al.',venue:'ICCV 2025',url:'https://github.com/SimpleVQA/SimpleVQA',linkLabel:'Project & paper',summary:'Evaluates factual reliability in multimodal question answering across diverse tasks and topics, separating factual knowledge from fluent but unsupported generation.'},
  {date:'2025-09-19',year:2025,category:'evaluation',title:'KORGym: A Dynamic Game Platform for LLM Reasoning Evaluation',authors:'Jiajun Shi, Jian Yang, Jiaheng Liu, …, <b>Wei Zhang</b>, et al.',venue:'NeurIPS 2025',distinction:'Spotlight',url:'https://openreview.net/forum?id=uAeqQePu4c',summary:'A dynamic game platform for evaluating language-model reasoning through interaction and sequential decisions.'},
  {date:'2024-12-23',year:2025,category:'agents',title:'ADC: Enhancing Function Calling via Adversarial Datasets and Code Line-Level Feedback',authors:'<b>Wei Zhang*</b>, Yi Zhang*, Li Zhu, et al.',venue:'ICASSP 2025',url:'https://arxiv.org/abs/2412.17754',summary:'Uses adversarial examples and code line-level feedback to construct function-calling supervision and improve tool-use robustness.'},
  {date:'2024-11',year:2024,category:'agents',title:'mABC: Multi-Agent Blockchain-inspired Collaboration for Root Cause Analysis in Micro-Services Architecture',authors:'<b>Wei Zhang</b>, Hongcheng Guo, Jian Yang, et al.',venue:'Findings of EMNLP 2024',url:'https://aclanthology.org/2024.findings-emnlp.232/',code:'https://github.com/zwpride/mABC',summary:'A collaborative multi-agent framework for microservice root-cause analysis, using specialized roles and a blockchain-inspired voting mechanism to organize diagnostic evidence.'}
];

papers.push(
  {date:'2026-07',year:2026,title:'Scaling Laws for Code: Every Programming Language Matters',authors:'Jian Yang, Shuyue Guo, Linzheng Chai, <b>Wei Zhang</b>, et al.',venue:'Findings of ACL 2026',url:'https://aclanthology.org/2026.findings-acl.487/'},
  {date:'2026-07',year:2026,title:'UCoder: Unsupervised Code Generation by Internal Probing of Large Language Models',authors:'Jiajun Wu, Jian Yang, <b>Wei Zhang</b>, Linzheng Chai, et al.',venue:'Findings of ACL 2026',url:'https://aclanthology.org/2026.findings-acl.277/'},
  {date:'2026-07',year:2026,title:'FrontCoder: Scaling Visual Fidelity in Front-End Code Generation',authors:'Jun Feng, Jian Yang, <b>Wei Zhang</b>, Jing Wang, et al.',venue:'Findings of ACL 2026',url:'https://aclanthology.org/2026.findings-acl.220/',code:'https://github.com/leanfeng1/FrontCoder'},
  {date:'2026-09-29',year:2026,title:'From Diagrams to Code: Multilingual Programming with Visual Design',authors:'Linzheng Chai, Jian Yang, Shukai Liu, <b>Wei Zhang</b>, et al.',venue:'ICML 2026',url:'https://proceedings.mlr.press/v306/chai26b.html'},
  {date:'2026-09-29',year:2026,title:'How Far Can LLM Agents Reason with Tables? Benchmarking Multi-Turn Agentic Table Question Answering in the Wild',authors:'Jingwang Huang, Jie Zhang, Haoyang Zeng, …, <b>Wei Zhang</b>, et al.',venue:'ICML 2026',url:'https://proceedings.mlr.press/v306/huang26cf.html',selection:'Representative agent-evaluation work; TableAgent-Bench.'},
  {date:'2026-07',year:2026,title:'MdEval: Massively Multilingual Code Debugging',authors:'Shukai Liu*, Linzheng Chai*, Jian Yang*, …, <b>Wei Zhang</b>, et al.',venue:'Findings of ACL 2026',url:'https://aclanthology.org/2026.findings-acl.1041/',selection:'Selected established multilingual code-evaluation work.'},
  {date:'2026-05-26',year:2026,title:'HTMLCure: Turning Browser Experience into State Guided Repair for Interactive HTML',authors:'Jiajun Wu, Jian Yang, Tuney Zheng, <b>Wei Zhang</b>, et al.',venue:'arXiv · 2026',preprint:true,url:'https://arxiv.org/abs/2605.26807'},
  {date:'2025-07',year:2025,title:'Qwen2.5-xCoder: Multi-Agent Collaboration for Multilingual Code Instruction Tuning',authors:'Jian Yang, <b>Wei Zhang</b>, Yibo Miao, Shanghaoran Quan, et al.',venue:'ACL 2025',url:'https://aclanthology.org/2025.acl-long.642/'},
  {date:'2025-07',year:2025,title:'IW-Bench: Evaluating Large Multimodal Models for Converting Image-to-Web',authors:'Hongcheng Guo, <b>Wei Zhang</b>, Junhao Chen, Yaonan Gu, et al.',venue:'Findings of ACL 2025',url:'https://aclanthology.org/2025.findings-acl.334/',code:'https://github.com/HC-Guo/IWBench'},
  {date:'2025-07-30',year:2025,title:'IFEvalCode: Controlled Code Generation',authors:'Jian Yang, <b>Wei Zhang†</b>, Shukai Liu, Linzheng Chai, et al.',venue:'arXiv · 2025',preprint:true,url:'https://arxiv.org/abs/2507.22462',selection:'Second author and corresponding author; public PDF footnote.'},
  {date:'2025-12-22',year:2025,title:'CodeSimpleQA: Scaling Factuality in Code Large Language Models',authors:'Jian Yang, <b>Wei Zhang</b>, Yizhi Li, Shawn Guo, et al.',venue:'arXiv · 2025',preprint:true,url:'https://arxiv.org/abs/2512.19424'},
  {date:'2025-02-23',year:2025,title:'CodeCriticBench: A Holistic Code Critique Benchmark for Large Language Models',authors:'Alexander Zhang*, Marcus Dong*, Jiaheng Liu*, <b>Wei Zhang</b>, et al.',venue:'arXiv · 2025',preprint:true,url:'https://arxiv.org/abs/2502.16614'},
  {date:'2025-12-29',year:2025,title:'Close the Loop: Synthesizing Infinite Tool-Use Data via Multi-Agent Role-Playing',authors:'Yuwen Li*, <b>Wei Zhang*</b>, Zelong Huang, Mason Yang, et al.',venue:'arXiv · 2025',preprint:true,url:'https://arxiv.org/abs/2512.23611'},
  {date:'2025-11-10',year:2025,title:'ECLIPSE: Efficient Cross-Lingual Log Intelligence Parser with Semantic Entropy-Enhanced LCS Algorithm',authors:'<b>Wei Zhang</b>, Xianfu Cheng, Xiang Li, Jian Yang, et al.',venue:'CIKM 2025',url:'https://doi.org/10.1145/3746252.3761231'},
  {date:'2024-08-22',year:2024,title:'TiNID: A Transfer and Interpretable LLM-Enhanced Framework for New Intent Discovery',authors:'Shun Zhang, Chaoran Yan, Jian Yang, <b>Wei Zhang</b>, et al.',venue:'ECML PKDD 2024',url:'https://link.springer.com/chapter/10.1007/978-3-031-70362-1_12'},
  {date:'2024-02-28',year:2025,title:'Lemur: Log Parsing with Entropy Sampling and Chain-of-Thought Merging',authors:'<b>Wei Zhang</b>, Xiangyuan Guan, Lu Yunhong, Jie Zhang, et al.',venue:'ICLR 2025 · SCI-FM Workshop',url:'https://arxiv.org/abs/2402.18205',code:'https://github.com/zwpride/lemur'},
  {date:'2025-05-14',year:2025,title:'Qwen3 Technical Report',authors:'Qwen Team · <b>Wei Zhang</b> (Contributor)',venue:'Technical report · 2025',preprint:true,url:'https://arxiv.org/abs/2505.09388',selection:'Flagship release; contributor, not individual listed author.'}
);
papers.push(
  {year:2026,title:'SWE-Git-Bench: A Worktree-Level Benchmark for Real Merge Conflict Resolution',authors:'<b>Wei Zhang</b>, Jian Yang, Jiajun Wu, Zidan Tang, Siwei Wu',venue:'NeurIPS 2026',track:'Evaluations & Datasets',url:'https://github.com/zwpride/SWE-Git-Bench',linkLabel:'Project'},
  {year:2026,title:'VeriScope: Measuring Verification-Ready Verilog Artifacts',authors:'<b>Wei Zhang</b>, Jian Yang, Jiajun Wu, Junhang Cheng, Chufan He, Yihang Lou, Xianglong Liu',venue:'NeurIPS 2026',track:'Evaluations & Datasets',url:'https://github.com/zwpride/VeriScope',linkLabel:'Project'}
);

papers.push(
  {year:2026,title:'M3TQA: Massively Multilingual Multitask Table Question Answering',authors:'Daixin Shu, Jian Yang, Zhenhe Wu, …, <b>Wei Zhang</b>, et al.',venue:'Findings of ACL 2026',arxivDate:'2025-08-22',url:'https://aclanthology.org/2026.findings-acl.1134/'},
  {year:2026,title:'MMTableBench: A Multi-level Multimodal Benchmark for Reasoning and Layout Complexity in Table QA',authors:'Xianjie Wu, Xiaohang Xu, Tingyu Jiang, …, <b>Wei Zhang</b>, et al.',venue:'WWW 2026',acceptedDate:'2026-01-13',url:'https://doi.org/10.1145/3774904.3792367'},
  {year:2024,title:'SVIPTR: Fast and Efficient Scene Text Recognition with Vision Permutable Extractor',authors:'Xianfu Cheng, Weixiao Zhou, Xiang Li, …, <b>Wei Zhang</b>, et al.',venue:'CIKM 2024',arxivDate:'2024-01-18',url:'https://doi.org/10.1145/3627673.3679618'},
  {date:'2025-12-29',year:2025,title:'AGRO-SQL: Agentic Group-Relative Optimization with High-Fidelity Data Synthesis',authors:'Cehua Yang, Dongyu Xiao, Junming Lin, …, <b>Wei Zhang</b>, et al.',venue:'arXiv · 2025',preprint:true,url:'https://arxiv.org/abs/2512.23366'},
  {date:'2026-09-15',year:2026,title:'SAVOR: Self-Aware Visual Grounding via Confidence-Calibrated Reinforcement Learning for Multimodal Hallucination Mitigation',authors:'Zixiu Ding, Zilin Zhao, Yingjie He, Xinlang Kang, Guansu Wang, <b>Wei Zhang†</b>',correspondingAuthors:['Wei Zhang'],venue:'ICONIP 2026',acceptedDate:'2026-08-14',url:'https://arxiv.org/abs/2609.16601'},
  {date:'2025-11-23',year:2025,title:'From Code Foundation Models to Agents and Applications: A Comprehensive Survey and Practical Guide to Code Intelligence',authors:'Jian Yang, Xianglong Liu, Weifeng Lv, …, <b>Wei Zhang</b>, et al.',venue:'arXiv · 2025',preprint:true,url:'https://arxiv.org/abs/2511.18538'},
  {year:2026,title:'FailAlign: Failure-Aligned Bootstrapping for Long-Horizon HTML Based Code Generation Agents',authors:'Fanglin Xu, <b>Wei Zhang</b>, Jian Yang, Guo Chen, Liqun Yang, Zhoujun Li',venue:'Findings of EMNLP 2026',url:'https://openreview.net/forum?id=vEPIexRtWC'}
);


const acceptanceCalendar = [
  [/NeurIPS 2026/, '2026-09-24'], [/EMNLP 2026/, '2026-08-20'],
  [/ICML 2026/, '2026-04-30'], [/ACL 2026/, '2026-04-04'],
  [/NeurIPS 2025/, '2025-09-18'], [/EMNLP 2025/, '2025-08-20'],
  [/CIKM 2025/, '2025-08-04'], [/ICCV 2025/, '2025-06-25'],
  [/ACL 2025/, '2025-05-15'], [/ICASSP 2025/, '2024-12'],
  [/EMNLP 2024/, '2024-09-20'], [/ECML PKDD 2024/, '2024-05-27']
];
for (const p of papers) {
  p.publicVersionDate=p.date||null;
  p.arxivDate=p.arxivDate||(p.url.startsWith('https://arxiv.org/abs/') ? p.date : null);
  if(p.title.startsWith('SimpleVQA:')) p.arxivDate='2025-02-18';
  // Earlier title: Multilingual Multimodal Software Developer for Code
  // Generation. Same authors, M²C-INSTRUCT / M²-CODER / M²EVAL; one work.
  if(p.title==='From Diagrams to Code: Multilingual Programming with Visual Design') p.arxivDate='2025-07-11';
  // A paper-specific confirmed date overrides the venue-level month when added.
  p.acceptedDate=p.acceptedDate||(!p.preprint && acceptanceCalendar.find(([pattern])=>pattern.test(p.venue))?.[1])||null;
}
const paperSortDate=p=>p.acceptedDate||p.arxivDate;
// One chronological list, not an accepted-first bucket. Equal keys retain the
// existing editorial order; a later arXiv revision never changes the sort key.
papers.sort((a,b)=>paperSortDate(b).localeCompare(paperSortDate(a)));

const publicResources = {
  'IQuest-Coder-V1 Technical Report': {resources:[{label:'Models (HF)',url:'https://huggingface.co/IQuestLab'}]},
  'InCoder-32B: Code Foundation Model for Industrial Scenarios': {code:'https://github.com/CSJianYang/Industrial-Coder',resources:[{label:'Model (HF)',url:'https://huggingface.co/Multilingual-Multimodal-NLP/IndustrialCoder'}]},
  'InCoder-32B-Thinking: Industrial Code World Model for Thinking': {code:'https://github.com/CSJianYang/Industrial-Coder',resources:[{label:'Model (HF)',url:'https://huggingface.co/Multilingual-Multimodal-NLP/IndustrialCoder-Thinking'}]},
  'LoopCoder-v2: Only Loop Once for Efficient Test-Time Computation Scaling': {resources:[{label:'GitHub',url:'https://github.com/CSJianYang/LoopCoder'},{label:'Model (HF)',url:'https://huggingface.co/Multilingual-Multimodal-NLP/LoopCoder-V2'}]},
  'Qwen3 Technical Report': {code:'https://github.com/QwenLM/Qwen3',resources:[{label:'Models (HF)',url:'https://huggingface.co/collections/Qwen/qwen3-67dd247413f0e2e4f653967f'}]},
  'WebWorld: The Browser as a World Model for Self-Improving Web Code': {resources:[{label:'Data (HF)',url:'https://huggingface.co/datasets/Multilingual-Multimodal-NLP/WebWorld-SFT-10k'}]},
  'V-GameGym: Visual Game Generation for Code Large Language Models': {code:'https://github.com/alibaba/SKYLENAGE-GameCodeGym',resources:[{label:'Data (HF)',url:'https://huggingface.co/datasets/alibabagroup/SKYLENAGE-GameCodeGym'}]},
  'SimpleVQA: Multimodal Factuality Evaluation for Multimodal Large Language Models': {linkLabel:'Code',resources:[{label:'Data (HF)',url:'https://huggingface.co/datasets/m-a-p/SimpleVQA'}]},
  'Turning the Tide: Repository-based Code Reflection': {code:'https://github.com/LiveRepoReflection/LiveRepoReflection-Project',resources:[{label:'Data',url:'https://github.com/LiveRepoReflection/LiveRepoReflection'}]},
  'CodeArena: Evaluating and Aligning CodeLLMs on Human Preference': {resources:[{label:'Data (HF)',url:'https://huggingface.co/datasets/CSJianYang/CodeArena'}]},
  'IFEvalCode: Controlled Code Generation': {code:'https://github.com/CSJianYang/IFEvalCode',resources:[{label:'Data (HF)',url:'https://huggingface.co/collections/Multilingual-Multimodal-NLP/ifevalcode'}]},
  'MdEval: Massively Multilingual Code Debugging': {resources:[{label:'Data (HF)',url:'https://huggingface.co/collections/Multilingual-Multimodal-NLP/mdeval'}]},
  'From Diagrams to Code: Multilingual Programming with Visual Design': {resources:[{label:'Model (HF)',url:'https://huggingface.co/Multilingual-Multimodal-NLP/MM-Coder-7B'},{label:'Data (HF)',url:'https://huggingface.co/collections/Multilingual-Multimodal-NLP/multilingual-multimodal-code'}]},
  'M3TQA: Massively Multilingual Multitask Table Question Answering': {resources:[{label:'Data (HF)',url:'https://huggingface.co/datasets/sdxvv/m3TQA-Bench'}]},
  'MMTableBench: A Multi-level Multimodal Benchmark for Reasoning and Layout Complexity in Table QA': {resources:[{label:'Data (HF)',url:'https://huggingface.co/datasets/Multilingual-Multimodal-NLP/MMTableBench'}]},
  'CodeSimpleQA: Scaling Factuality in Code Large Language Models': {code:'https://github.com/CSJianYang/CodeSimpleQA'},
  'CodeCriticBench: A Holistic Code Critique Benchmark for Large Language Models': {code:'https://github.com/multimodal-art-projection/CodeCriticBench'},
  'A Self-Evolving Framework for Efficient Terminal Agents via Observational Context Compression': {code:'https://github.com/multimodal-art-projection/TACO'},
  'KORGym: A Dynamic Game Platform for LLM Reasoning Evaluation': {code:'https://github.com/multimodal-art-projection/KORGym'},
  'SVIPTR: Fast and Efficient Scene Text Recognition with Vision Permutable Extractor': {code:'https://github.com/cxfyxl/VIPTR'},
  'SWE-Git-Bench: A Worktree-Level Benchmark for Real Merge Conflict Resolution': {linkLabel:'Code',resources:[{label:'Data',url:'https://doi.org/10.7910/DVN/FSFEZX'}]},
  'VeriScope: Measuring Verification-Ready Verilog Artifacts': {linkLabel:'Code',resources:[{label:'Data',url:'https://doi.org/10.7910/DVN/IZOTLO'}]}
};
for(const p of papers) Object.assign(p,publicResources[p.title]||{});
const list = document.querySelector('#paper-list');
const escapeHTML = value => value.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderResourceLinks(p){
  const links=[{label:p.linkLabel||'Paper',url:p.url},...(p.code?[{label:'Code',url:p.code}]:[]),...(p.resources||[])];
  const seen=new Set();
  return links.filter(link=>{if(seen.has(link.url))return false;seen.add(link.url);return true;}).map(link=>{
    const kind=link.url.includes('huggingface.co/')?'Hugging Face: ':'';
    return `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener" aria-label="${escapeHTML(kind+link.label+' — '+p.title)}">${escapeHTML(link.label)} ↗</a>`;
  }).join('');
}
function renderPapers(){
  list.innerHTML=papers.map(p=>{const sortDate=paperSortDate(p);const dateLabel=p.acceptedDate?'Acceptance notification (venue-level reference)':'arXiv first release';return `<article class="paper"><time class="paper-year" datetime="${sortDate}" title="${dateLabel}: ${sortDate}">${sortDate.slice(0,7).replace('-','.')}</time><div><h3><a href="${p.url}" target="_blank" rel="noopener">${escapeHTML(p.title)}</a></h3><p class="authors">${p.authors.replaceAll('<b>','<strong>').replaceAll('</b>','</strong>')}</p><div class="paper-foot"><span class="venue ${p.preprint?'preprint':''}">${escapeHTML(p.venue)}</span>${p.distinction?`<span class="distinction">${p.distinction}</span>`:''}${renderResourceLinks(p)}</div></div></article>`}).join('');
}
renderPapers();

document.querySelectorAll('.venue:not(.preprint)').forEach(el=>{
  const family=el.textContent.match(/\b(ACL|EMNLP|ICML|NeurIPS|ICCV)\b/);
  if(family) el.dataset.venue=family[1].toLowerCase();
});
