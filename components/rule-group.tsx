"use client";

import { useEffect, useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { RuleEntry } from "@/components/rule-entry";
import type { RuleGroup as RuleGroupType } from "@/lib/types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u0400-\u04ff]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface RuleGroupProps {
  group: RuleGroupType;
  groupIndex: number;
  accentColor?: string;
}

export function RuleGroup({ group, groupIndex, accentColor }: RuleGroupProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const matchIndex = group.rules.findIndex(
      (rule) => slugify(rule.title) === hash
    );
    if (matchIndex !== -1) {
      const value = `rule-${groupIndex * 1000 + matchIndex}`;
      setOpenItems((prev) => (prev.includes(value) ? prev : [...prev, value]));
    }
  }, [group.rules, groupIndex]);

  return (
    <section>
      {(group.title || group.subtitle) && (
        <div className="mb-3">
          {group.title && (
            <h3
              className="font-display text-lg font-semibold"
              style={{ color: accentColor }}
            >
              {group.title}
            </h3>
          )}
          {group.subtitle && (
            <p className="text-sm text-muted-foreground mt-1">
              {group.subtitle}
            </p>
          )}
          <Separator className="mt-3" />
        </div>
      )}
      <Accordion
        type="multiple"
        className="w-full"
        value={openItems}
        onValueChange={setOpenItems}
      >
        {group.rules.map((rule, ruleIndex) => (
          <RuleEntry
            key={ruleIndex}
            rule={rule}
            index={groupIndex * 1000 + ruleIndex}
            ruleId={slugify(rule.title)}
            accentColor={accentColor}
          />
        ))}
      </Accordion>
    </section>
  );
}
